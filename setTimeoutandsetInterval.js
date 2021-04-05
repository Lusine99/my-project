                   
function sayHi () {
console.log('Hello')
} 
 setTimeout(sayHi, 1000) ;
                          
                             
  function sayHello( phrase, who) {
console.log (phrase + ',' + who);
}
setTimeout(sayHello, 1000, "Good morning" , "Vache");
                          
                          
setTimeout("console.log('Today is your day')", 1000);

setTimeout(() => console.log ('Have a nice day'), 1000);
                          
                          
 let timerId2 = setInterval (() => console.log('sun'), 2000);
  setTimeout(() => {clearInterval(timerId2); console.log('stop'); }, 5000);
   
  
   setTimeout (() => console.log("day"));
    console.log("rainy");



     function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbers(5, 10);       


function printNumbers(from, to) {
    let current = from;
  
    function go() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }
  
    go();
    let timerId = setInterval(go, 2000);
  }
  
  printNumbers(6, 11);
                          
                          
                          


