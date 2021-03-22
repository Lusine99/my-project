let set = new Set();
let harry = { name: "Harry" };
let katrin = { name: "Kattrin" };
let eliza= { name: "Eliza" };


set.add(harry);
set.add(katrin);
set.add(eliza);
set.add(harry);
set.add(eliza);

console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); 
   }