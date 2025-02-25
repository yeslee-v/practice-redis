export default () => ({
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    ttl: parseInt(process.env.REDIS_TTL, 10) || 300, // 5분 캐싱
    // ttl: parseInt(process.env.REDIS_TTL, 10) || 3600, // 1시간 캐싱
  },
});
