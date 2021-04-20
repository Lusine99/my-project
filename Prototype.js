let arr = [3, 4, 5 ];
console.log (arr . __proto__ === Array.prototype);
console.log (arr . __proto__.__proto__ === Object.prototype);
console.log( arr.__proto__.__proto__.__proto__);


String.prototype.show = function () {
console.log(this)
};
"Today is Tuesday".show();


if (!String.prototype.repeat) {
  String.prototype.repeat = function (n) {
    return new Array(n + 1). join(this)
  }
};
console.log ("Aha".repeat(6) );



let obj = {
  0: "Sunny",
  1: "day",
  length: 2

};
obj.join = Array.prototype.join;
console.log  (obj.join(','));
