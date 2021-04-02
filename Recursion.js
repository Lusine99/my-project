
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  console.log( pow(2, 3) ); // 8
  
  
  
  function pow (x, n) {
      if (n===1) {
          return x;
      } else {
    return x * pow (x, n-1); 
    }
  }
  console.log(pow(2,3)) ; //8
  
  
  
  
  
  let company = { 
    sales: [{name: 'Any', salary: 100}, {name: 'Alice', salary: 200 }],
    development: {
      sites: [{name: 'Ara', salary: 300}, {name: 'Andre', salary: 2000 }],
      internals: [{name: 'Lusine', salary: 1300}]
    }
  };
  
  
  function sumSalaries(department) {
    if (Array.isArray(department)) { 
      return department.reduce((prev, current) => prev + current.salary, 0); 
    } else { 
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); 
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(company)); // 3900
  