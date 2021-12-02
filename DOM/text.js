//Working with DOM Trees and using DFS.
//DO NOT RUN THIS FILE. COPY PASTE IN BROWSER CONSOLE LOL.

//Given the body, write a function that changes the color of the boxes to yellow and green without using class or id selectors of the boxes. 
console.log("hello world")
x = document.getElementsByTagName("body")[0];
console.log(x)
function changeColor (root, index) {
    if (index % 2 == 0) {
        root.style.backgroundColor = "yellow";
    } else {
        root.style.backgroundColor = "green";
    }
    for (let child of root.children) {
        changeColor(child, index+1)
    }
}

changeColor(x, 0);
// console.log(x)