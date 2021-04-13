
 let user = {
    name: "Ahmed",
    age: 27,


sayHi () {
    console.log(this.name)
}
};

user.sayHi();



let user1 = { name: "Julia"};
let admin= { name: "Admin"};

function sayHello(){
   console.log (this.name);
}
 
user1.f = sayHello;
admin.f = sayHello;


user1.f();
admin.f();
admin['f']

