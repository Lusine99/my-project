function User (name) {
    this.name = name;
    this.isAdmin = false;
  }
  let user = new User ("Vardan");
  console.log(user.name);
  console.log(user.isAdmin)
 
  function User(name) {
    if(!new.target){
      return new User (name);
    }
    this.name = name;
  }
  let mary= User ("Mary");
  console.log(mary.name);
 
 function BigUser() {
   this.name = "Mane";
   return {name: "Hasmik"};
 }
 console.log (new BigUser().name);
 
 function SmallUser () {
   this.name = "Jack";
   return;
 }
 console.log(new SmallUser().name);
 
 function User (name) {
   this.name = name;
   this. sayHi = function(){
     console.log ("My name  is " +this.name);
   };
 }
 let grig = new User ("Grig");
 grig.sayHi();