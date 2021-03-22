let arr = ["Hello", "my", "friend"];

arr.splice(1, 1); 

console.log(arr ); 


let arr1 = ["You", "are", "smart", "educated", "beatiful"];


arr1.splice(0, 3, "my", "friend");

console.log( arr1 ) 



let arr2 = ["One", "day", "dead"];


arr2.splice(2, 0, "we", "will");

console.log( arr2 ); 


let arr3 = [3, 4];

console.log( arr.concat([5, 6]) ); 
console.log( arr.concat([7, 8], [9, 10]) ); 
console.log( arr.concat([7, 8], 9, 10) ); 


let arr4 = [1, 2];

let arrayLike = {
  0: "call",
  1: "me",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr.concat(arrayLike) ); 

let users = [
  {id: 1, name: "Jack"},
  {id: 2, name: "John"},
  {id: 3, name: "Ahmed"}
];

let user = users.find(item => item.id == 1);

console.log(user.name); //Jack


let arr5 = [ 2, 4, 20 ];


arr.sort();

console.log( arr5);  // 2,20, 4

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr6 = [ 2, 4, 20];

arr6.sort(compareNumeric);

console.log(arr6);  


let arr7 = [ 3, 7, 20 ];

arr7.sort(function(a, b) { return a - b; });

console.log(arr7);  //3,7,20

let arr8 = [1, 2, 3, 4, 5];
arr8.reverse();

console.log( arr8 ); // 5,4,3,2,

let arr9 = 'Lilit, Anna, Gloria, Masha'.split(', ', 2);

console.log(arr9); // Lilit, Anna


let str = "brain";

console.log( str.split('') ); // brain

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users2 = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];


let soldiers = users2.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23


function copySorted(arr) {
  return arr.slice().sort();
}

let arr10 = ["Ruby", "C++", "Java"];

let sorted = copySorted(arr10);

console.log( sorted );
console.log( arr10 );


let manya = { name: "Manya", age: 18 };
let petya = { name: "Petya", age: 31 };
let rima = { name: "Rima", age: 24 };

let users3 = [ manya, petya, rima ];

let names = users3.map(item => item.name);

console.log( names ); 


function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vardan = { name: "Vardan", age: 30 };
let ara = { name: "Ara", age: 25 };
let ani= { name: "Ani", age: 32 };

let arr11 = [ vardan, ara, ani ];

console.log( getAverageAge(arr11) ); // 29