
 let name = "Julia"                     
 function sayHi () {
   console.log("Hi," + name );
 }
 name = "Katrin";
 sayHi();
 
 
 
 function User(name) {
   this.sayHi =function() {
     console.log(name)
   };
 }
 let user = new User ("Vardan");
 user.sayHi();
 
 
 function makeCounter (){
 let count = 1;
 return function () {
   return count++
 };
 }
 let counter = makeCounter();
 console.log(counter()); 
 console.log(counter()); 
 console.log(counter()); 
 
 
 
 
 
 function makeCounter() {
   let count = 0;
   return function() {
     return count++;
   };
 }
 
 let counter1 = makeCounter();
 let counter2 = makeCounter();
 
 console.log( counter1() ); // 0
 console.log( counter1() ); // 1
 
 console.log( counter2() ); // 0
 
 
  (function (){
    let message= "Beutiful"
    console.log(message);
  }) ();
 
 
  function sum(a) {
 
   return function(b) {
     return a + b; 
   };
 
 }
 
 console.log( sum(2)(2) ); // 4
 console.log( sum(5)(-3) ); // 2