


const arrayEquality = (arr) => {
    return JSON.stringify(arr) === JSON.stringify([1, 2, 3])
}
// console.log(arrayEquality([1,2,3])) // true

const arrayAt = (arr, i) => arr.at(i)
// console.log(arrayAt([5,6,7,8], 1)) // 6

const arrConcat = (ar1, ar2, ...ar3) => {
    return ar1.concat(ar2, ...ar3) //Returns a new array
}
// console.log(arrConcat([1,2,3], ["A","B"], 7,8,9)) // [1,2,3,"A","B",7,8,9]


const copyWithin = () => {
    const fruits = ['apple', 'banana', 'cherry', 'date'];

    // Copy the first two elements to the last two positions in the array
    fruits.copyWithin(2, 0, 2);
    console.log(fruits); // Output: ['apple', 'banana', 'apple', 'banana']
    /* target: The zero-based index at which to copy the sequence to. If negative, target will be counted from the end.
    
    start: The zero-based index at which to start copying elements from. If negative, start will be counted from the 
    end. If omitted, it will copy from the start of the array (default is 0).
    
    end: The zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end. If omitted, it will copy until the end of the array (default is the length of the array). */
}
// copyWithin()



const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
// console.log(iterator1.next().value); // [ 0, 'a' ]
// console.log("2 more left: ")
for (let iterator1Element of iterator1) {
    // console.log(iterator1Element) // [ 1, 'b' ] [ 2, 'c' ]
}
// console.log(iterator1.next()); 

// sort
const ar = [2, 3, 6, 2, 1, -9]
// console.log(ar.sort((x,y) => {
//     return x - y
// }))

// Transform with map
const squareNumbers = (arr) => arr.map(num => num * num);
// console.log(squareNumbers([1, 2, 3])); // [1, 4, 9]

// Filter with filter
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
// console.log(filterEvenNumbers([1, 2, 3, 4])); // [2, 4]

// Reduction with reduce
const sumArray = (arr) => arr.reduce((total, num) => total + num, 0);
// console.log(sumArray([1, 2, 3, 4])); // 10

// Get the first match with find
const findFirstLargeNumber = (arr, threshold) => arr.find(num => num > threshold);
// console.log(findFirstLargeNumber([1, 2, 3, 4], 2)); // 3

// Check for any match with some
const hasEvenNumber = (arr) => arr.some(num => num % 2 === 0);
// console.log(hasEvenNumber([1, 3, 5, 8])); // true

// Check if all items match with every
const allEvenNumbers = (arr) => arr.every(num => num % 2 === 0);
// console.log(allEvenNumbers([2, 4, 6])); // true
// console.log(allEvenNumbers([2, 3, 6])); // false

// Check for existence with includes
const includesNumber = (arr, num) => arr.includes(num);
// console.log(includesNumber([1, 2, 3], 2)); // true

// Get index of first match with findIndex
const findIndexByValue = (arr, value) => arr.findIndex(num => num === value);
// console.log(findIndexByValue([1, 2, 3], 3)); // 2

// Create a subarray with slice
const getSubarray = (arr, start, end) => arr.slice(start, end);
// console.log(getSubarray([1, 2, 3, 4, 5], 1, 3)); // [2, 3]

// Shallow copy with spread operator
const copyArray = (arr) => [...arr];
const original = [1, 2, 3];
const copied = copyArray(original);
// console.log(copied); // [1, 2, 3]

// Remove/replace elements with splice
const removeElements = (arr, start, deleteCount) => {
    arr.splice(start, deleteCount);
    return arr;
};
// console.log(removeElements([1, 2, 3, 4, 5], 1, 2)); // [1, 4, 5]

// Chain array methods
const processArray = (arr) => arr
    .map(num => num * 2)
    .filter(num => num > 5);
// console.log(processArray([1, 2, 3, 4])); // [6, 8]

// Sort array
const arr = [2, 3, 5, 1, 7, 0, 4];
// console.log(a.sort((x, y) => x - y)); // [0, 1, 2, 3, 4, 5, 7]

// Default Assignment in Array Destructuring
const [a = 1, b = 2] = [undefined, 3];
// console.log(a); // 1 because the first item is undefined
// console.log(b); // 3


// Optional Chaining (?.)
const obj = {
    a: {
        b: {
            c: 1
        }
    }
};
const value = obj?.a?.b?.c; // 1
// console.log(value);


