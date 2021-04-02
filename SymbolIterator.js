let range = {
  from: 2,
  to: 4
};

range[Symbol.iterator] = function() {

  return {
    current: this.from,
    last: this.to,

    
    next() {
     
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};


for (let num of range) {
  console.log(num); // 2,3,4
}

let str2 = 'A😂';
for (let char of str2) {
    console.log( char ); }




    let str3 = "brain";
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); }


  let lusine = { name: "Lusine" };

let visitsCountObj = {}; 
visitsCountObj[lusine] = 123;
console.log( visitsCountObj["[object Object]"] ); // 123