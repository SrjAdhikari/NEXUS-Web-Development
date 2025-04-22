// Import Redis library
import redis from "redis";

// Create a Redis client instance with connection configuration
const redisClient = redis.createClient({
    // Redis username (default is 'default' for Redis 6.0+)
    username: 'default',
    
    // Password for authentication with the Redis server
    password: 'Xrnbhmo6i0VfYldOu26mcOhUgnhNxyia',
    
    // Socket connection details
    socket: {
        // Host address of the Redis server
        host: 'redis-15789.c290.ap-northeast-1-2.ec2.redns.redis-cloud.com',
        
        // Port number on which Redis server is listening
        port: 15789
    }
});

// Export the Redis client instance
export default redisClient;