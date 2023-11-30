import redis from 'redis';

const rClient = redis.createClient();
rClient.on('connect', () => {console.log('Redis client connected to the server')});
rClient.on('error', (error) => {console.log(`Redis client not connected to the server: ${error.message}`)});

const hashKey = 'HolbertonSchools';
const keys = ['Portland', 'Seattle', 'New York', 'Bogota', 'Cali', 'Paris'];
const values = [50, 80, 20, 20, 40, 2];

keys.forEach((key, idx) => rClient.hset(hashKey, key, values[idx], redis.print));

client.hgetall(KEY, (err, value) => console.log(value));
