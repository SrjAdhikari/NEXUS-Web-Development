// import the functions from calculator module
const { sum, diff, product, division } = require("./Calculator");

// perform some calculations
const result1 = sum(2, 3);
const result2 = diff(5, 2);
const result3 = product(4, 6);
const result4 = division(10, 2);

// print the results
console.log(result1);           // Output: 5
console.log(result2);           // Output: 3
console.log(result3);           // Output: 24
console.log(result4);           // Output: 5


//* 📌 Why require("./Calculator") Works Without Exact File Path ?
    // Exact file path is: require("./Calculator/index.js");

    // When we provide a path to "require()" (e.g., "./Calculator"), Node.js looks for the module in the following order:
    // 1️⃣ Checks for "./Calculator.js":
        // Node.js first looks for a file named "./Calculator.js". If it exists, it loads that file.

    // 2️⃣ Checks for "./Calculator/index.js":
        // If "./Calculator.js" doesn't exist, Node.js checks if "./Calculator" is a folder.
        // If it is a folder, Node.js looks for an "index.js" file inside that folder ("./Calculator/index.js").
        // If "index.js" exists, it loads that file.

    // 3️⃣ "index.js" is Special:
        // "index.js" is treated as the default entry point for a folder in Node.js.
        // Node.js also checks for other file extensions like ".json", ".node", etc., but ".js" is the default.


//* 📌 Key Points:
    // If a folder contains an "index.js" file, Node.js will automatically resolves "./Calculator" to "./Calculator/index.js".
    // If "index.js" doesn’t exist in the folder, Node.js will throw an error
    // If a folder contain other file instead of an "index.js" file, then it is necessary to provide the exact file path.