const os = require('os'); 
const redis = require('redis');

const HOST = process.env.HOST || '0.0.0.0';

const redisClient = redis.createClient(6379, HOST);

redisClient.on('ready', () => {
  redisClient.select(3)
  redisClient.set(os.hostname(), 'HOST', () => {
    process.exit()
  })
})
