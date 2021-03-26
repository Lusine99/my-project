let options = {
  title: "Menu"
};
let {width = 150, height = 100, title} = options;

console.log(title);  // Menu
console.log(width);  // 150
console.log(height); // 100


                        
let options2 = {
  title1: "Menu"
};

let {width: w = 200, height: h = 150, title1} = options2;

console.log(title1);  // Menu
console.log(w);      // 200
console.log(h);      // 150
