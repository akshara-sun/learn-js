### Big O Notation Explained
Time Complexity is the **the time it takes for a function to run as the input size grows**. 
    - The way you can calculate runtime is by:
        1. find the fastest growing term 
        2. take out the coefficient 

Types of time complexities (ranked from best to worst) - n stands for the input size 
    - O(1) - constant time - as the size of the input increases, thetime it takes to complete the function does not increase at all
    - O(n) - linear time - as the size of the input increases, the time increases ***linearly***
    - O(log n) - logarithmic time - as the size of the input increases ***exponentially***, the time it takes to run the function increases ***linearly***
    - O(n log n) - loglinear time - divide, conquer, and merge - repeatedly divides a set of data in half and then processes those halves independently with a sub algorithm that has a time complexity of O(N)
    - O(n^2) - polynomial time - as the size of the input increases, the time it takes to run the function increases n to the power of the number of times n will be processed
    - O(x^n) - exponential time - growth of time doubles with each addition to the input 
    - O(!n)

