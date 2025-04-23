import redisClient from "../database/connectToRedisDB.js";

//* ==============================
//* ✅ Fixed Window Rate Limiter
//* ==============================

const fixedWindowRateLimiter = async (req, res, next) => {
    try {
        // Get client IP address
        const ipAddress = req.ip;

        // Use namespaced key for Redis to avoid collisions
        const redisKey = `rate_limit:${ipAddress}`;

        // Increment request count for this IP in Redis
        const requestCount = await redisClient.incr(redisKey);

        // Set expiration only on first request (60 minutes TTL)
        if(requestCount === 1) {
            await redisClient.expire(redisKey, 3600);
        }

        // Check if limit exceeded (60 requests/hour)
        if(requestCount > 60) {
            throw new Error("Too many requests - try again later");
        }

        next();

    } catch (error) {
        // Handle rate limiting errors
        res.status(429).json({                                      // 429 = Too Many Requests
            status: "error",
            message: error.message || "Too many requests",
            retryAfter: "1 hour"                                    // Inform client when to retry
        });
    }
};

export default fixedWindowRateLimiter;