let visitedSet = new WeakSet();

let sevak= { name: "Sevak" };
let andre= { name: "Andre" };
let gohar= {name: "Gohar" };

visitedSet.add(sevak);
visitedSet.add(andre);
visitedSet.add(sevak);
console.log(visitedSet.has(sevak)); // true
console.log(visitedSet.has(gohar)); // false

                // Object.keys, values, entries
let user5 ={
  name:"Anahit",
  age: 26,
};
for(let value of Object.values(user5)){
  console.log(value)
}