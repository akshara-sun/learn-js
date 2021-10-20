//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let sourceKeys = Object.keys(source);
    collection.filter(function(obj) {
      for (let key of sourceKeys) {
        if (!obj.hasOwnProperty(key) || obj[key] !== source[key]
        ) {
          return false;
        }
      }
      arr.push(obj);
    });
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
