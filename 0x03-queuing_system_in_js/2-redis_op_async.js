import redis from 'redis';
const { promisify } = require('utils');

const rClient = redis.createClient();
const asyncGet = promisify(rClient.get).bind(rClient);

rClient.on('connect', () => {console.log('Redis client connected to the server')});
rClient.on('error', (error) => {console.log(`Redis client not connected to the server: ${error.message}`)});

function setNewSchool(schooName, value) {
  rClient.set(schoolName, value, redis.print);
}

async function displaySchoolValue() {
  console.log(await asyncGet(schoolName));
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
