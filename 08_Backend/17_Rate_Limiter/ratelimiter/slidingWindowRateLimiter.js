import redisClient from "../database/connectToRedisDB.js";


//* =================================
//* ✅ Sliding Window Rate Limiter
//* =================================


// Rate limiting configuration (in seconds)
const WINDOW_SIZE_IN_SECONDS = 3600;            // 1 hour window
const MAX_REQUESTS_PER_WINDOW = 60;             // 60 requests/hour

// Implements sliding window rate limiting using Redis sorted sets
const slidingWindowRateLimiter = async (req, res, next) => {
    try {
        // Create a unique Redis key based on client IP
        const redisKey = `IP:${req.ip}`;

        // Get current timestamp in seconds
        const currentTimestamp  = Date.now() / 1000;

        // Calculate start of sliding window
        const windowStartTimestamp = currentTimestamp - WINDOW_SIZE_IN_SECONDS;

        // Remove outdated requests from the window
        await redisClient.zRemRangeByScore(
            redisKey,
            0,                                                  // Minimum score (oldest)
            windowStartTimestamp                                // Maximum score (start of window)
        );

        // Get current request count within the window
        const currentRequestCount  = await redisClient.zCard(redisKey);

        // Check if request exceeds the limit
        if(currentRequestCount >= MAX_REQUESTS_PER_WINDOW) {
            throw new Error(
                `Rate limit exceeded. Maximum ${MAX_REQUESTS_PER_WINDOW} requests per ${WINDOW_SIZE_IN_SECONDS / 3600} hour(s)`
            );
        }

        // Record the new request with current timestamp
        await redisClient.zAdd(redisKey, [
            { 
                score: currentTimestamp,                         // Use as score for sorting
                value: `${currentTimestamp}:${Math.random()}`    // Ensure unique value
            }
        ]);

        // Set TTL to auto-expire this key after window size
        await redisClient.expire(redisKey, WINDOW_SIZE_IN_SECONDS);

        next();

    } catch (error) {
        // Handle rate limiting errors
        res.status(429).json({                                   // 429 = Too Many Requests
            status: "error",
            message: error.message || "Too many requests",
            retryAfter: `${WINDOW_SIZE_IN_SECONDS / 60} minutes`,
        });
    }
};

export default slidingWindowRateLimiter;