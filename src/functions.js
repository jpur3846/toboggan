/* 
Returns a snowflake 80% of the time and a tree 20% of the time. 
*/
const randomMapElement = () => {
    const randomNum = Math.random();
    
    if (randomNum <= 0.8) {
        return 'βοΈ';
    } else {
        return 'π²';
    }
}

/* 
Creates and returns a 2D array of width and height.
*/
export const generateInputMap = (height, width) => {
    var outputArray = [];

    for (var i = 0; i < height; i++) {
        var newRow = [];
        for (var j = 0; j < width; j++) {
            newRow.push(randomMapElement());
        }
        outputArray.push(newRow);
    }

    return outputArray;
}

/* 
Mutates the input array to provide a solution.
*/
export const solve = (inputArray) => {
    var outputArray = inputArray.map(arr => arr.slice()); // Slice returns a new array of extracted elements.
    var j = 0;
    var numTrees = 0;
    for (var i = 0; i < outputArray.length; i++) {
        if (outputArray[i][j] === 'βοΈ') {
            outputArray[i][j] = 'πΎοΈ';
        } else if (outputArray[i][j] === 'π²') {
            numTrees++;
            outputArray[i][j] = 'β';
        }
        j += 3;
    }
    return [outputArray, numTrees];
}