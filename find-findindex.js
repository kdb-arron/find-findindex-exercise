function findUserByUsername(usersArray, username) {
  return usersArray.find(function(user) {
    return user.username === username;
  });
}

const users = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' }
];

console.log(findUserByUsername(users, 'mlewis')); // {username: 'mlewis'}
console.log(findUserByUsername(users, 'taco')); // undefined


function removeUser(usersArray, username) {
  const index = usersArray.findIndex(function(user) {
    return user.username === username;
  });
  
  if (index === -1) return undefined;

  // Remove the user from the array and return it
  return usersArray.splice(index, 1)[0];
}

const users2 = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' }
];

console.log(removeUser(users2, 'akagen')); // {username: 'akagen'}
console.log(removeUser(users2, 'akagen')); // undefined
