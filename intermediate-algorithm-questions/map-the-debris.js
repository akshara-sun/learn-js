//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    //do something to each object in the array 
    arr.forEach(obj => {
      obj.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3)/GM)) 
    delete obj.avgAlt
    })
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);