//* ****************************************************
//* Array Flat Method In JavaScript
//* ****************************************************


//* flat() Method:
// The flat() method creates a new array with all sub-array elements concatenated into it, removing the nesting (or flattening the array).
// It removes one or more levels of nesting based on the depth provided.

//* Syntax: array.flat(depth);
// depth (optional): The depth level specifying how deep a nested array should be flattened. The default is 1.

//* How it works:
// 1. The flat() method removes the specified number of nesting levels in an array.
// 2. By default, it removes one level of nesting.


//* ****************************************************

//* Example 1: Flattening a Simple Array
const array = [1, 2, 3, [4, 5, 6], 7, 8];
const flatArray = array.flat();
console.log(flatArray);         // Output -> [ 1, 2, 3, 4, 5, 6, 7, 8 ]


//* Explanation:
// 1. Array: [1, 2, 3, [4, 5, 6], 7, 8].
// 2. The flat() method flattens the array to remove one level of nesting.
// 3. The result is [ 1, 2, 3, 4, 5, 6, 7, 8 ].


//* ****************************************************

//* Example 2: Flattening a Deeper Nested Array
const arr = [1, 2, [3, 4, [5, 6]]];
const flatArr = arr.flat(2);
console.log(flatArr);         // Output -> [ 1, 2, 3, 4, 5, 6 ]


//* Explanation:
// 1. Array: [1, 2, [3, 4, [5, 6]]].
// 2. Depth: 2 → The method flattens two levels of nesting.
// 3. The result is [1, 2, 3, 4, 5, 6].


//* Default Depth (1 Level):
// If no depth is provided, it defaults to 1, meaning it will remove only one level of nested arrays.

console.log(arr.flat());         // Output -> [ 1, 2, 3, 4, [ 5, 6 ] ]


//* ****************************************************

//* Example 3: Infinite Depth Flattening
// If you want to flatten all levels of nesting, you can pass Infinity as the depth.
// It flattens the array completely, no matter how deeply nested it is.

const numArray = [1, [2, [3, [4, [5]]]]];
const flatNumArray = numArray.flat(Infinity);
console.log(flatNumArray);         // Output -> [ 1, 2, 3, 4, 5 ]

//* ****************************************************