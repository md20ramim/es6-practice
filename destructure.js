const person ={name:'Jack William', age:17, job:'Facebook', gfName:'Eva Watson', address:'New York', phone:'019283734648', friends:['Tom Hanks', 'Tom Cruise' , 'Tom Yarn']};
// console.log(person.gfName, person.name);
const gfName = person.gfName;
console.log(gfName);

const friends =['Sakib' ,'Salman', 'Sharukh', 'amir'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(restFriends);