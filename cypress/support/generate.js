//const { faker } = require('@faker-js/faker');
function getRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const generateUser = () => {
  const username = `user_${getRandomString(8)}`;
  const password = getRandomString(12); 

  return {
    username: username,
    password: password,
  };
}
