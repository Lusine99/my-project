class User {
    constructor (name){
      this.name = name;
    }
    sayHi (){
      console.log(this.name);
    }
  }
  let user = new User ("Dorian");
  user.sayHi();
 
 class User{
   constructor(name) {this.name = name;}
   sayHi() {console.log(this.name);}
 }
 console.log(typeof User);
 
 console.log(User === User.prototype.constructor);
 
 console.log(User.prototype.sayHi);
 
 console.log(Object.getOwnPropertyNames(User.prototype));
 
 function makeClass (phrase) {
   return class {
     sayHi (){
       console.log(phrase)
     };
   };
 }
 let User = makeClass ("Hello")
 new User ().sayHi();
 
 class User {
   constructor (name) {
     this.name = name;
   }
   get name () {
     return this._name;
   }
   set name (value) {
     if (value.length < 4) {
       console.log ("The name is too short");
       return;
     }
     this._name = value;
   }
 }
 let user = new User ("Aram");
 console.log(user.name);
 user = new User("");