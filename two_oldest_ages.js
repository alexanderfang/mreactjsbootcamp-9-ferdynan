// The two oldest ages function/method needs to be completed. 
// It should take an array of numbers as its argument and return the two highest numbers within the array. 
// The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

function twoOldestAges(ages){
    for (let i = 0; i < ages.length; i++) {
        for (let j = 0; j < ages.length-i-1; j++) {
            if(ages[j] > ages[j+1]){
                let temp = ages[j]
                ages[j] = ages[j+1]
                ages[j+1] = temp
            }
        }
    }
    return [ages[ages.length-2], ages[ages.length-1]]
}
console.log(twoOldestAges([1, 2, 10, 8]))//[8, 10]
console.log(twoOldestAges([1,5,87,45,8,8]))//[45,87]