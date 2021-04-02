
let sum2 = new Function('a', 'b', 'return a + b');
console.log( sum(1, 2) );   



function getFunc() {
 let value = "life";

 let func = function() { console.log(value); };

 return func;
}

getFunc()(); 