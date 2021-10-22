/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
*/

//SOLUTION USES BINARY SEARCH - Comments added for understanding.
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //the first version
        let startingVersion = 1;
        
        //the latest version
        let latestVersion = n;
        
        //variable to save result in 
        let result;
        
        while (startingVersion <= latestVersion) {
            //calculate the middle version in the list of versions.
            //including the midVersion INSIDE the while loop so that we can update it as we                 narrow down our search
            let midVersion = Math.floor((startingVersion+latestVersion)/2)
            
            //if the middle version is bad...
            if (isBadVersion(midVersion)) {
                
                //save middle version in result...
                result = midVersion
                //make the latest version the one before the middle version - you are doing                     this because you are looking to the left to check if midversion is the first                   bad version or if there is one before it 
                latestVersion = midVersion - 1;
                
        } 
            else { 
                //if midVersion is not bad, then we are going to search on the right of it so we make the startingVersion the one after midVersion
                startingVersion = midVersion + 1;
            }
        }
        return result;  
    };
};