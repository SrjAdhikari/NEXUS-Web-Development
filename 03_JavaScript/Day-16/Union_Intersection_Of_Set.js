//* ****************************************************
//* Union And Intersection Of Sets In JavaScript
//* ****************************************************


//* Union of Sets
// The union of two sets combines all unique elements from both sets. Duplicate values are excluded.
// The union of sets can be perform by using the "spread operator(...)".


// Create two sets
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

// Union of sets
const unionSet = new Set([...set1, ...set2]);
console.log(unionSet);                                  // Output -> Set(5) { 1, 2, 3, 4, 5 }


//* ****************************************************


//* Intersection of Sets
// The intersection of two sets includes only the elements that are present in both sets.
// The intersection of sets can be perform by using the ".filter()" method.


// Create two sets
const set3 = new Set([10, 20, 30, 40, 50]);
const set4 = new Set([30, 40, 50, 60, 70]);

// Intersection of sets
const intersectionSet = new Set([...set3].filter( value => set4.has(value) ));
console.log(intersectionSet);                           // Output -> Set(3) { 30, 40, 50 }


//* Explanation:
// [...set3]: Converts set3 into an array, allowing us to use the .filter() method.
// .filter(value => set4.has(value)): Loops through each element of set3 and checks if it also exists in set4 using "set4.has(value)". 
// If it exists, the element is included in the result.
// new Set(): Converts the resulting array back into a Set.


//* ****************************************************


//* Difference of Sets
// The difference of two sets includes elements that are in one set but not in the other.
// The difference of sets can be perform by using the ".filter()" method.


// Create two sets
const set5 = new Set([10, 20, 30, 40, 50]);
const set6 = new Set([30, 40, 50, 60, 70]);

// Difference of sets
const differenceSet = new Set([...set5]. filter( value => !set6.has(value) ));
console.log(differenceSet);                             // Output -> Set(2) { 10, 20 }


//* Explanation:
// [...set5]: Converts set5 into an array to allow the use of array methods like .filter().
// .filter(value => !set6.has(value)): Loops through each element of set5 and checks if it does not exist in set6 using !set6.has(value). 
// If it doesn’t exist, the element is included in the result.
// new Set(): Converts the resulting array back into a Set.


//* ****************************************************
//* Reusable Code of Union, Intersection And Difference
//* ****************************************************

// Union Function
const union = (setA, setB) => new Set([...setA, ...setB]);


// Intersection Function
const insersection = (setA, setB) => new Set([...setA].filter( value => setB.has(value) ));


// Difference Function
const difference = (setA, setB) => new Set([...setA].filter( value => !setB.has(value) ));


//* Example:
const setA = new Set(['A', 'B', 'C']);
const setB = new Set(['B', 'C', 'D']);

const unionResult = union(setA, setB);
const intersectionResult = insersection(setA, setB);
const differenceResult = difference(setA, setB);

console.log(unionResult);                               // Output -> Set(4) { 'A', 'B', 'C', 'D' }
console.log(intersectionResult);                        // Output -> Set(2) { 'B', 'C' }
console.log(differenceResult);                          // Output -> Set(1) { 'A' }