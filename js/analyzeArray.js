// we need an average function, 
// run min,max and length functions on the given array

export const analyzeArray = (arr) => {
    return {
        average: average(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

const average = (arr) => {
    const total = arr.reduce( (acc, cur) => acc + cur);
    return total / arr.length;
}
