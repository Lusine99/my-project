let recipeMap = new Map([
  ["tomamto", 800],
  ["cucumber", 550],
  ["onion",    100]
]);


for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); 
}


for (let amount of recipeMap.values()) {
  console.log(amount); // 800,550,100
}


for (let entry of recipeMap) { 
  console.log(entry); //800,500,100
}

let prices = Object.fromEntries([
  ['orange', 1],
  ['apple', 2],
  ['chichken', 4]
]);

console.log(prices.apple);
