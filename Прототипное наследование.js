 let person = {
   walks: true
 };

 let wife = {
   singing: true
 };
wife.__proto__ = person;

console.log(wife.walks);
console.log(wife.singing);



let chef = {
  cooking: true,
  eats() {
    console.log("Chef eats");
  }
};
let man = {
  drinking : true,
  __proto__: chef
};
chef.eats();





let parent = {
  drinks: true,
  sing() { 
  }
};
  let John = {
  __proto__:parent
};
John.walk = function() {
  console.log ("John! Running-running to the bright future!");
};
John.walk();



let user = {
  name: "Ane",
  surname: "Artaz",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); 

admin.fullName = "Lusine Grig"; 
console.log(admin.name); 
console.log(admin.surname); 






