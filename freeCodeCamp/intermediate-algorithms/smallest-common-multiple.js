//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function smallestCommons(arr) {
    let [min, max] = arr.sort((a,b) => a-b);
    let rangeArr = []
    let allMultiplied = 1;
    for (let i = min; i <= max; i++) {
      rangeArr.push(i);
    }
    allMultiplied = rangeArr.reduce((a,b) => a*b);
    
    for (let multiple = max; multiple <= allMultiplied; multiple += max) {
      let numDivisors = 0;
      for (let i = min; i<=max; i++) {
        if (multiple % i === 0) {
          numDivisors += 1;
        }
      }
      if (numDivisors === rangeArr.length) {
        return multiple;
      }
    }
  }
  
  smallestCommons([1,5]);