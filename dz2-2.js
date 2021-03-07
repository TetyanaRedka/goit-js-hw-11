// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  function promiseUsers(user, userName) {
    return new Promise((resolve, reject) =>
      user.name === userName
        ? resolve({ ...user, active: !user.active })
        : reject(user),
    );
  }

  const updatedUsers = allUsers.map(user =>
    promiseUsers(user, userName)
      .then(result => result)
      .catch(error => error),
  );

  return Promise.all(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);
/*
 * Должно работать так
//  */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
