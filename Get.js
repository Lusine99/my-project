
 let user ={
    name: "Chris",
    surname: "Rea",

   get fullName(){
       return `${this.name} ${this.surname}`;
   }
};
console.log(user.fullName);


let user = {
   name: "Nelson",
   surname: "Mandela",
 
   get fullName() {
     return `${this.name} ${this.surname}`;
   },
 
   set fullName(value) {
     [this.name, this.surname] = value.split(" ");
   }
 };
 
 
 user.fullName = "Nelson Mandela";
 
 console.log(user.name); 
 console.log(user.surname); 

