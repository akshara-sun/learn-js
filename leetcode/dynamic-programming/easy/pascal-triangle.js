//118.
//Given an integer numRows, return the first numRows of Pascal's triangle.

const generate = (numRows) => {
    if (numRows === 0) return [];
    let pascalTriangle = []
    for (let row = 1; row <= numRows; row++) {
        let rowContents = [];
        for (let column = 0; column < row; column++) {
            if (column == 0 || column == row - 1) {
                rowContents.push(1)
            } else {
                rowContents.push((pascalTriangle[row-2][column-1] + pascalTriangle[row-2][column]))
            }
        }
        pascalTriangle.push(rowContents)
    }
    return pascalTriangle
};


/*
[
    [1], 
    [1,1],
    [1,2,3], 
    [1,3,3,1],
    [1,4,6,3,1]
...
]

- first element of each nested array is always 1
- last element of each nested array is always 1
- length of nested array increments by index + 1 -> so nested array at index 2 has length of 3

English solution 
 - initialize result array variable
 - if numRows is 0, return empty array 
 - loop through pascal's triangle
    - each row represents a nestedArray and it starts at 0 and increments to < numRows
    - initialize track array variable
    - to access the nestedArray's elements, have another for loop to keep track of columns 
        - columns only start at 0 and increment until row length (not inclusive)
            - conditions: 
                - if we are in the first or last column, then push 1 into array variable 
                - OTHERWISE: push the previous row's (row - 1) and one column to the left (column-1) + previousRow + same column
            push track array variable into result array variable
- return result array variable  
*/