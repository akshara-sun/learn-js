//ADVANCED ALGORITHM SCRIPTING PROJECTS!

//PALINDROME CHECKER
function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[\W_]/g, "")
    for (let i = 0, j= str.length-1; i < str.length/2; i++, j--) {
      if (str[i] !== str[j]) {
        return false;
      } 
    }
    return true;
  }

  palindrome("eye");
