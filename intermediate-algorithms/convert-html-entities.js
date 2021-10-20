//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS
 
function convertHTML(str) {
    let split = str.split("");
    for (let i = 0; i < split.length; i++) {
      switch(split[i]) {
        case "&":
          split[i] = "&amp;";
          break;
        case "<":
          split[i] = "&lt;";
          break;
        case ">":
          split[i] = "&gt;";
          break;
        case '"':
          split[i] = "&quot;";
          break;
        case "'":
          split[i] = "&apos;";
          break;
      }
    }
    str = split.join("")
    return str;
  }
  
  convertHTML("Dolce & Gabbana");