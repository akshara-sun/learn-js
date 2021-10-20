//ADVANCED ALGORITHM SCRIPTING PROJECTS!

//CAESAR'S CIPHER
function rot13(str) {
    let rot13 = {
      'A': 'N',
      'B': 'O',
      'C': 'P',
      'D': 'Q', 
      'E': 'R', 
      'F': 'S', 
      'G': 'T', 
      'H': 'U', 
      'I': 'V', 
      'J': 'W', 
      'K': 'X', 
      'L': 'Y', 
      'M': 'Z', 
      'N': 'A', 
      'O': 'B', 
      'P': 'C' , 
      'Q': 'D', 
      'R': 'E', 
      'S': 'F', 
      'T': 'G', 
      'U': 'H', 
      'V': 'I', 
      'W': 'J', 
      'X': 'K', 
      'Y': 'L', 
      'Z': 'M'
    }
    let copy = str.split("");
    let decoded = ""
    for (let i = 0; i < str.length; i++) {
      for (let letter in rot13) {
        if (str[i] === rot13[letter]) {
          copy.splice(i, 1, letter)
        }
      }
    }
    decoded = copy.join("")
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");
