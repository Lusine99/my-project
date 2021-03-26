let Jan01_1970= new Date(0)
console.log(Jan01_1970)


let date=new Date ("2020-06-20");
console.log(date);



let date2 = new Date(2016, 0, 2);

date2.setDate(1); 
console.log( date2 );

date2.setDate(0);  
console.log( date2 ); // 31  Dec 2015

let date3 = new Date( Date.parse('2014-01-26T13:51:50.417-07:00') );

console.log(date3);

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log( getLastDayOfMonth(2012, 0) ); // 31
console.log( getLastDayOfMonth(2012, 1) ); // 29
console.log( getLastDayOfMonth(2013, 1) ); // 28

let today = new Date();

today.setHours(0);
console.log(today); 

today.setHours(0, 0, 0, 0);
console.log(today); 