import { createClient } from 'redis';

const rClient = createClient();
rClient.on('connect', () => {console.log('Redis client connected to the server')});
rClient.on('error', (error) => {console.log(`Redis client not connected to the server: ${error.message}`)});

function setNewSchool(schooName, value) {
  rClient.set(schoolName, value, redis.print);
}

function displaySchoolValue() {
  rClient.get(schoolName,(error, value) {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(value);
  });
}
