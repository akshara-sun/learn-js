/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].
To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, 
plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. 
Replace the color of all of the aforementioned pixels with newColor. 
*/

//Solution - runtime : O(r * c) -> r = rows, c = columns
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

 const floodFill = (image, sr, sc, newColor) => {
    const oldColor = image[sr][sc];
    
    if(oldColor === newColor){
        return image;
    }

    fillColor(image, sr, sc, newColor, oldColor);
    
    return image;
};

//helper function 
const fillColor = (image, sr, sc, newColor, oldColor) => {
    if(sr < 0){
        return;
    }

    if(sc < 0){
        return;
    }

    if(sr >= image.length){
        return;
    }

    if(sc >= image[sr].length){
        return;
    }

    if(image[sr][sc] !== oldColor){
        return;
    }
    
     image[sr][sc] = newColor;
    
     fillColor(image, sr - 1, sc, newColor, oldColor);

     fillColor(image, sr + 1, sc, newColor, oldColor);

     fillColor(image, sr, sc - 1, newColor, oldColor);

     fillColor(image, sr, sc + 1, newColor, oldColor);
}
