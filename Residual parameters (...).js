
function sumAll(...args) { 
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1,2) ); // 3
  console.log( sumAll(1,2,3) ); // 6
  
  
  function showName (firstName, lastName, ...titles){
    console.log (firstName + '' + lastName); //Anton Chekhov
  console.log(titles[0]);
  console.log((titles[1]));
  console.log(titles.length);
  }
  showName("Anton", "Chekhov", "Russian" ,"writer");
  
  
  function showName(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1])
  }
  showName("Jack", "London");
  showName("Emili")
  
  
  console.log(Math.max(1,7,9));
  
  
  let arr1 = [1, 5, 7, 25, 4 ];
  let arr2 = [-18, 36, 5, 8, 14 ];
  console.log(Math.max(...arr1, ...arr2));
  
  
  let arr3 = [1, 2, -3 ,4, 6];
  let arr4 =[-2, 6, 8, 0, 9 ];
  console.log(Math.max(1,...arr3, 2, ...arr4, 30));
  
  let str= "Unique";
  console.log([...str])