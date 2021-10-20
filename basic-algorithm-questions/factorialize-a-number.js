//BASIC ALGORITHM SCRIPTING PROBLEMS

//FACTORIALIZE A NUMBER
function factorialize(num) {
	//base condition
  if(num == 0 || num == 1){
    return 1; 
  }
  //recursion
  return num * factorialize(num - 1);
}