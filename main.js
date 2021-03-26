 "use strict"
//     let x= 3;
//     x= -x;
//     console.log ( x ); //-3,



// let message;
// message='Good evening!';
// console.log(message) ; //message,

    
// console.log("Lusine");


// console.log(1/0); Infinity
// console.log(Infinity); Infinity

// console.log("Hello");

// console.log("10"/"5"); //2;

//     let value = false;
//     console.log(typeof value); //boolean
//     value= String(value); //"true"
//     console.log(typeof value); //string

//     let str = "245";
//     console.log(typeof str); //string
//     let num = Number (str); //245
//     console.log(typeof num); //number

//     console.log(3>1); //true
//     console.log(4===5); //false
//     console.log(3!=1); //true

// console.log( true || true );   // true
// console.log( true || false );  // true
// console.log( false || false ); // false
    
// console.log (3||0); //3
// console.log( true ||'no matter what'); //true
// console.log( null || 2 ); //2
// console.log( null ||0 || 2 ); //2
// console.log ( undefined || null || 3 ); //3

// let currentUser=null;
// let defaultUser="Lusine";
// let name=currentUser || defaultUser|| "unnamed";
// console.log(name); // "Lusine"

// let $ = 2; 
// let _ = 3; //"_"
// console.log( "$" +  "_"); //$

// const myBirhtday='20.06.1999';

// const COLOR_RED = "F00";
// const COLOR_GREEN = "0F0";
// const COLOR_BLUE = "00F";
// const COLOR_ORANJE = "FF7FOO";
// let color = COLOR_ORANJE;
// console.log (color); "FF7F00"

// let age = prompt('How old are you?', 18);
// console.log(`You ${age} year!`); // You are 18

// let isAdmin = confirm("Are you admin?");
// console.log(isAdmin); //true

// console.log("8"/"2"); //4

// console.log( Boolean(1) );//true
// console.log( Boolean (0) ); //false
// console.log( Boolean ("Have a nice day")); //true
// console.log( Boolean ("") ) //false

// console.log ( Boolean("0") ); // true
// console.log ( Boolean(" ") );//true

// let year = prompt( "ECMAScript-2018?");
// if (year===2018) console.log (true);

// if( 4||0 ) { // ( true || false )
//     console.log( 'truthy!' );
//   }

// let hour = 9
// if (hour < 11 || hour > 19) {
//     console.log ('Office closed.');
// }

// let firstName = null;
// let lastName = null;
// let nickName = "righthand"
// console.log(firstName ?? lastName ?? nickName ?? "Nameless")    ; //right hand 

// // if(firstName){
// //  console.log(firstName)
// // }else if(lastName){
// //     console.log(lastName)
// // }else{
// //     console.log(nickName)
// // }
   


// function printName(params){
//      return console.log(params)
//      }
//      printName('Tatev')
    


// function ask (question, yes, no) {
//     if (confirm(question)) yes ()
//     else (no);   
// }
// ask (
//     "Do you agree?",
//     function() {
//         console.log ("You agreed.");
//          } , 
//     function() {
//         console.log("You canceled accomplishment." ) ;}

//      );


// console.log (3 ** 2); //6
// console.log( 3 ** 3); //27
// console.log (3 ** 4); //81

// console.log ('5'+ 1); //51
// console.log('1'+5); //15

// console.log(3 + 3 +'1'); //61

// console.log(6 -'2'); //4
// console.log('6'/'2'); //3

// let apples = "4"
// let oranges ="2"
// console.log(Number (apples) + Number(oranges) ) ;//6

// let a = 2;
// let b = 3;

// let c = 5 -(a = b + 2);
// console.log ( a ); //5
// console.log( c ); //0

// let n=4;
// n += 5;  //n=9
// n *= 2; //18
// console.log( n ); 18

// let counter = 3;
// counter ++ //counter = counter = counter+1
// console.log( counter ) ; //4

// console.log( 4 > 3 ); //true
// console.log( 4=== 3);// false
// console.log (4!=3) ; //true

// let result = 7 > 3 ; // result
// console.log (result) ; // true

// console.log ( 'B' > 'A' ); // true
// console.log ('sun'>'rain'); // true
// console.log  ( 'like'>'hate'); // true

// console.log ('4' > 2) ; // true, string '4' become number 4

// console.log (true===1) ; // true
// console.log (false===0); // true

// let a = 0;
// console.log (Boolean(a)); // false

// let b= "0";
// console.log (Boolean(b)); // true
// console.log(a===b); // true

// console.log (0== false) ;// true
// console.log ("" === false); //false
// console.log(0 === false); //false

// console.log ( null === undefined) ; //false

// console.log (null > 0) ; //false
// console.log (null===0) ; //false
// console.log (null>=0) ; //true

// console.log( undefined > 0 ); // false 
// console.log( undefined < 0 ); // false 
// console.log( undefined ===0 ); // false 

// let accessAllowed;
// let age = prompt ('How old are you?', '');
// if (age > 20) {
//     accessAllowed=true;
//     console.log(age)
// } else {
//     accessAllowed=false;
//     console.log(age < 20)
// }
// console.log(accessAllowed);

// console.log( true && true );   // true
// console.log( false && true );  // false
// console.log( true && false );  // false
// console.log( false && false ); // false

// let hour = 20;
// let minute = 30;

// if (hour === 20 && minute === 30); {
//   console.log( 'The time is 20:30' );
// }

// console.log ( 3 && 4) ; //4
// console.log( 5 && 6 ); //6

// console.log ( 8 % 5); //3
// console.log (5 % 3); //2

// console.log (4 ** (1/2)); //2



// let n = 2;
// n *= 3 + 5;
// console.log ( n ); //16

// let counter = 2;
// counter--;
// console.log (counter) ; //1

// // let y=8 ; x=3;
// // console.log ( y===8 && x===3) //false
// // console.log ( x===3 && y ===8) //true

// // let x=7 ; y=9
// // console.log (x===7 || y ===9) //true
// // console.log (x===5 || y===6) //false
 

// let height = 0;
// let width = 0;
// let area = (height ?? 100) * (width ?? 50);
// console.log(area); // 5000

// let i = 0;
// while (i < 3) { //  0,  1, 2
//   console.log( i );
//   i++;
// }
 

//   function doNothing() { /* */ }
// console.log( doNothing() === undefined ); // true


// let arg = prompt("Enter the number?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( '1 or 0' );
//     break;

//   case '2':
//     alert( '2' );
//     break;

//   case 3:
//     alert( 'It is never fulfilled:!' );
//     break;
//   default:
//     alert(' Unknown value' );
// }


// let sum = (a, b) => a + b;
// /* 

// let sum = function(a, b) {
//   return a + b;
// };
// */
// console.log( sum(1, 2) ); // 3

// let double = n => n * 2;
// console.log( double(3) ); // 6

// const bigint = 1234567890123456789012345678901234567890n;
// const sameBigint = BigInt("1234567890123456789012345678901234567890");
// const bigintFromNumber = BigInt(10); //  10n

// console.log (3n + 2n); // 5
// console.log (5n / 2n)  ; // 2

// // let bigint = 4n;
// // let number = 2;
// // console.log(Number(bigint) + number); // 6

// console.log( 3n > 1n ); // true

// console.log( 3n > 1 ); // true

// for (let i = 0; i < 5; i++) {
//   console.log("value,", i);
// }

// function greet (name) {
//   console.log ('Hello' + name) ;
// }
// greet ('John')
// greet ('Kate')

// function sayHello () {
//   let greeting= "Hy! My name is Lusine";
//   return greeting
// }
// console.log(sayHello () );

// function start () {
//   for (let i = 0 ; i < 5; i++)
//   console.log (i)
// }
// start()


// function pow(x, y) {
//   let result = 1;

//   for (let i = 0; i < y; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", "");
// let y = prompt("y?", "");

// if ( y < 0) {
//   console.log( y < 0);
// } else {
//   console.log( pow(x, y) );
// }

// let user1 = {
//   admin() {
//     console.log("I am admin");
//   }
// }
// let user2 = {};

// user1.admin?.(); // I am admin
// user2.admin?.();



// let userName1 = {
//   firstName: "Jack"
// };

// let userName2 = null; 

// let key = "firstName";

// console.log( userName1?.[key] ); // Jack
// console.log( userName2?.[key] ); // undefined

// console.log( userName1?.[key]?.something?.not?.existing); // undefined

// let user = {
//   name: "Jasmin"
// }
// let id = Symbol("id")
// user [id]= 1;
// console.log(user[id]) ;

// let sym = Symbol.for("age")
// let sym2 = Symbol.for("id")
// console.log(Symbol.keyFor(sym)) ; //age
// console.log(Symbol.keyFor(sym2)) ; //id



// let currentUser= {
//   name: "John",
//   money: 1000,

//   toString() {
//     return `{name: "${this.name}"}`;
//   },

 
//   valueOf() {
//     return this.money;
//   }

// };


// console.log( currentUser); // toString -> {name: "John"}
// console.log(+ currentUser); // valueOf -> 1000
// console.log( currentUser + 500); // valueOf -> 1500

// let number= {
//   toString () {
//     return "3"
//   }
// };
// console.log (number * 3) ; //9



// let obj =  {
//   toString(){
//     return "3"
//   }
// };
// console.log (obj + 3) ; //33

// let roma = {
//   name: "Roma",
//   sayHello: function () {
//     console.log ("Hy my friend!") ;
//   } 
// };
// roma.sayHello(); //Hy my friend!

// let str = "beautiful"
// console.log(str.toUpperCase()) ; //BEAUTIFUL

// let n = 2.345678;
// console.log(n.toFixed(3)) ; //2.346



// console.log( typeof 1 ); // "number"
// console.log( typeof new Number(1) ); // "object"!



// let bilion = 1e8
// console.log (7.3e9)

// let ms = 1e6
// console.log(1e6)

// let number1=1e-4
// console.log (1e-4);
// let number2 =1.24e-6
// console.log(1.24e-6)

// let a =0b11111111;
// let b = 0o377;
// console.log (a===b) ;//true 


// let numbers= 1.23456;
// console.log(Math.floor(numbers * 100) /100); //1.23

// let num3 = 14.36
// console.log(num3.toFixed(6)) ;

// console.log (0.1 + 0.3) // 0.30000000000000004

// let sum = 0.1 + 0.2;
// console.log( sum.toFixed(2) ); // 0.30

// console.log( 9999999999999999 ); // 10000000000000000


// function summ(a, b) {
//   return a + b;
// }

// console.log(`2 + 3 = ${summ(2, 3)}.`); // 2 + 3 = 5.

// let guestList = `Guests:
//  * Ann
//  * Martin
//  * Jeyn
// `;

// console.log(guestList);


// // ©
// console.log( "\u{1F60D}" );

// console.log(`You are beautiful`)

// let string = `Hello`;


// console.log( string[0] ); // H
// console.log( string.charAt(0) ); // H


// console.log( string[string.length - 1] ); // o

// for (let char of "Hello") {
//   console.log(char); // H,e,l,l,o 
// }


// console.log( 'My nicest city Gyumri'.toUpperCase() ); 
// console.log( 'My nicest city Gyumri'.toLowerCase() );


// console.log( ~2 ); // -3,that is -(2+1)
// console.log( ~1 ); // -2, that is -(1+1)
// console.log( ~0 ); // -1, that is -(0+1)
// console.log( ~-1 ); // 0, that is -(-1+1)

// let arr = [ 'Apple', { name: 'Ane' }, true, function() { console.log('Hello'); } ];
// console.log( arr[1].name ); // Ane
// arr[3](); //  hello


// let fruits = ["Apple", "Oranje", "Pear"];

// console.log( fruits.pop() ); // delete Pear

// console.log( fruits ); // Apple, Oranje



// let  fruits4 = ["Apple"];

// fruits.push("Cherry", "Pear");
// fruits.unshift("Pineapple", "Lemon");
// console.log( fruits );




// let arr = ["Hello", "my", "friend"];

// arr.splice(1, 1); 

// console.log(arr ); 



// let arr1 = ["You", "are", "smart", "educated", "beatiful"];


// arr1.splice(0, 3, "my", "friend");

// console.log( arr1 ) 



// let arr2 = ["One", "day", "dead"];


// arr2.splice(2, 0, "we", "will");

// console.log( arr2 ); 


// let arr3 = [3, 4];

// console.log( arr.concat([5, 6]) ); 
// console.log( arr.concat([7, 8], [9, 10]) ); 
// console.log( arr.concat([7, 8], 9, 10) ); 


// let arr4 = [1, 2];

// let arrayLike = {
//   0: "call",
//   1: "me",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// console.log( arr.concat(arrayLike) ); 

// let users = [
//   {id: 1, name: "Jack"},
//   {id: 2, name: "John"},
//   {id: 3, name: "Ahmed"}
// ];

// let user = users.find(item => item.id == 1);

// console.log(user.name); //Jack


// let arr5 = [ 2, 4, 20 ];


// arr.sort();

// console.log( arr5);  // 2,20, 4

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr6 = [ 2, 4, 20];

// arr6.sort(compareNumeric);

// console.log(arr6);  


// let arr7 = [ 3, 7, 20 ];

// arr7.sort(function(a, b) { return a - b; });

// console.log(arr7);  //3,7,20

// let arr8 = [1, 2, 3, 4, 5];
// arr8.reverse();

// console.log( arr8 ); // 5,4,3,2,

// let arr9 = 'Lilit, Anna, Gloria, Masha'.split(', ', 2);

// console.log(arr9); // Lilit, Anna


// let str = "brain";

// console.log( str.split('') ); // brain

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   }
// };

// let users2 = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30}
// ];


// let soldiers = users2.filter(army.canJoin, army);

// console.log(soldiers.length); // 2
// console.log(soldiers[0].age); // 20
// console.log(soldiers[1].age); // 23


// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr10 = ["Ruby", "C++", "Java"];

// let sorted = copySorted(arr10);

// console.log( sorted );
// console.log( arr10 );


// let manya = { name: "Manya", age: 18 };
// let petya = { name: "Petya", age: 31 };
// let rima = { name: "Rima", age: 24 };

// let users3 = [ manya, petya, rima ];

// let names = users3.map(item => item.name);

// console.log( names ); 


// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let vardan = { name: "Vardan", age: 30 };
// let ara = { name: "Ara", age: 25 };
// let ani= { name: "Ani", age: 32 };

// let arr11 = [ vardan, ara, ani ];

// console.log( getAverageAge(arr11) ); // 29
               
               
               
                  
// let range = {
//   from: 2,
//   to: 4
// };

// range[Symbol.iterator] = function() {

//   return {
//     current: this.from,
//     last: this.to,

    
//     next() {
     
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };


// for (let num of range) {
//   console.log(num); // 2,3,4
// }

// let str2 = 'A😂';
// for (let char of str2) {
//     console.log( char ); }




//     let str3 = "brain";
// let iterator = str[Symbol.iterator]();
// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   console.log(result.value); }


//   let lusine = { name: "Lusine" };

// let visitsCountObj = {}; 
// visitsCountObj[lusine] = 123;
// console.log( visitsCountObj["[object Object]"] ); // 123


                        
// let recipeMap = new Map([
//   ["tomamto", 800],
//   ["cucumber", 550],
//   ["onion",    100]
// ]);


// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); 
// }


// for (let amount of recipeMap.values()) {
//   console.log(amount); // 800,550,100
// }


// for (let entry of recipeMap) { 
//   console.log(entry); //800,500,100
// }

// let prices = Object.fromEntries([
//   ['orange', 1],
//   ['apple', 2],
//   ['chichken', 4]
// ]);

// console.log(prices.apple);


                   

// let set = new Set();
// let harry = { name: "Harry" };
// let katrin = { name: "Kattrin" };
// let eliza= { name: "Eliza" };


// set.add(harry);
// set.add(katrin);
// set.add(eliza);
// set.add(harry);
// set.add(eliza);

// console.log(set.size); // 3

// for (let user of set) {
//   console.log(user.name); 
//    }


                    
// let visitedSet = new WeakSet();

// let sevak= { name: "Sevak" };
// let andre= { name: "Andre" };
// let gohar= {name: "Gohar" };

// visitedSet.add(sevak);
// visitedSet.add(andre);
// visitedSet.add(sevak);
// console.log(visitedSet.has(sevak)); // true
// console.log(visitedSet.has(gohar)); // false

//                 // Object.keys, values, entries
// let user5 ={
//   name:"Anahit",
//   age: 26,
// };
// for(let value of Object.values(user5)){
//   console.log(value)
// }




// let options = {
//   title: "Menu"
// };
// let {width = 150, height = 100, title} = options;

// console.log(title);  // Menu
// console.log(width);  // 150
// console.log(height); // 100


                        
// let options2 = {
//   title1: "Menu"
// };

// let {width: w = 200, height: h = 150, title1} = options2;

// console.log(title1);  // Menu
// console.log(w);      // 200
// console.log(h);      // 150



                    
// let Jan01_1970= new Date(0)
// console.log(Jan01_1970)


// let date=new Date ("2020-06-20");
// console.log(date);



// let date2 = new Date(2016, 0, 2);

// date2.setDate(1); 
// console.log( date2 );

// date2.setDate(0);  
// console.log( date2 ); // 31  Dec 2015

// let date3 = new Date( Date.parse('2014-01-26T13:51:50.417-07:00') );

// console.log(date3);

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }
// console.log( getLastDayOfMonth(2012, 0) ); // 31
// console.log( getLastDayOfMonth(2012, 1) ); // 29
// console.log( getLastDayOfMonth(2013, 1) ); // 28

// let today = new Date();

// today.setHours(0);
// console.log(today); 

// today.setHours(0, 0, 0, 0);
// console.log(today); 
                    
// let user7 = {
//   name: "Erik",
//   age: 29,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };

// console.log(JSON.stringify(user7, null, 2));


// let room = {
//   number: 38,
//   toJSON() {
//     return this.number;
//   }
// };

// let meetup = {
//   title: "Conference",
//   room
// };

// console.log( JSON.stringify(room) ); // 38

// console.log( JSON.stringify(meetup) );


// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// console.log( numbers[1] ); // 1


// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2021-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2020-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(schedule, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// console.log( schedule.meetups[1].date.getDate() ); // 18

              
