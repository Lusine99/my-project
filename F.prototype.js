
let animal = {
  eats: true
};
 function Cat (name) {
   this.name = name;
 }
 Cat.prototype = animal;
 let cat = new Cat  ("Black cat");
 console.log(cat.eats)


function Dog () {}
console.log (Dog.prototype.constructor == Dog);


function Hourse () {}
let hourse = new Hourse ();
console.log (hourse.constructor == Hourse);



function Erick (name) {
  this.name = name;
  console.log (name);
}
let erick = new Erick ("Erick Chavush");
let erick2 = new erick.constructor("Erick Stade")