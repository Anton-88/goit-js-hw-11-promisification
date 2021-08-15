const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// task 1
const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(logger(ms), ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

console.log('tests for first task --->>>');
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// task 2
console.table(users);
const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    const result = allUsers.map((user) => {
      return user.name === userName ? { ...user, active: !user.active } : user;
    });
    resolve(result);
  });
};

const logger2 = updatedUsers => console.table(updatedUsers);

console.log('tests for second task --->>>');
toggleUserState(users, 'Mango').then(logger2);
toggleUserState(users, 'Lux').then(logger2);

//task 3
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const logSuccess = (resolved) => {
  console.log(`Transaction ${resolved[0]} processed in ${resolved[1]}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

const makeTransaction = (transaction) => {
  return new Promise((resolve, reject) => {
    const delay3 = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolve([transaction.id, delay3]);
      } else {
        reject(transaction.id);
      }
    }, delay3);
  })
};

console.log('tests for third task --->>>');

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
