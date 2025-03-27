//* ****************************************************
//* 📌 Introduction To Database
//* ****************************************************


//* 📌 What is a Database ?
    // A database is a physical storage system where we can store data in a structured (organized) way.
    // A database is managed by a database management system (DBMS) like MySQL, PostgreSQL, or MongoDB.


    //* Characteristics of a Database:
        // 1️⃣ Stores data in tables (relational) or collections (NoSQL).
        // 2️⃣ It provides a way to manage and retrieve data efficiently.
        // 3️⃣ It supports transactions for atomicity and consistency.
        // 4️⃣ It supports data normalization to reduce redundancy and complexity.
        // 5️⃣ It supports indexing for faster data retrieval.


//* ****************************************************
//* 📌 Types of Databases
//* ****************************************************

    // 1️⃣ Relational Databases
        // Relational databases store data in tables with rows and columns. 
        // Each row represents a record, and each column represents a field or attribute.
        // Relational databases use SQL (Structured Query Language) for data manipulation.
        // Example: MySQL, PostgreSQL, Oracle, etc.


    // 2️⃣ NoSQL Databases
        // NoSQL databases store data in documents, key-value pairs, or graphs. 
        // They are non-relational and use different data models like JSON, XML, or MongoDB.
        // NoSQL databases use different query languages like MongoDB's query language.
        // Example: MongoDB, CouchDB, Redis, etc.


//* ****************************************************
    // SQL === MySQL (❌)
    // SQL = Language (✅)
    // MySQL = DBMS (✅)
//* ****************************************************


//* 📌 What is DBMS ?
    // A DBMS is a software by which we can interact with a database.
    // It is responsible for creating, modifying, and deleting data in a database.
    // It also handles the security and performance of the database.


//* ****************************************************
//* 📌 Structured, Unstructured & Semi-Structured Data
//* ****************************************************

    // 1️⃣ Structured Data
        // Data with a fixed schema (organized in rows/columns).
        // Example: SQL tables, Spreadsheets (Excel), etc.

    // 2️⃣ Unstructured Data
        // Data with no predefined format or schema.
        // Example: Images, videos, Text documents, Social media posts, etc.

    // 3️⃣ Semi-Structured Data
        // Data with some structure but flexible schema.
        // Example: XML, JSON, NoSQL databases (MongoDB), etc.


//* ****************************************************
//* 📌 Key Concepts Inside a Database
//* ****************************************************

    // 1️⃣ Tables: 
        // A table is a collection of rows and columns. 
        // Each row represents a record, and each column represents a field or attribute.

    // 2️⃣ Primary Key: 
        // A unique identifier for each row in a table. 
        // It is used to ensure data integrity and to identify a row uniquely.

    // 3️⃣ Foreign Key: 
        // A key from one table that refers to the primary key of another table. 
        // It is used to establish relationships between tables.

    // 4️⃣ Index: 
        // An index is a data structure that allows quick access to specific data within a table. 
        // It is used to improve query performance.

    // 5️⃣ Constraints: 
        // Constraints are rules that limit the values that can be stored in a column. 
        // They are used to ensure data integrity and consistency.

    // 6️⃣ Transactions: 
        // A transaction is a group of related operations that are executed as a single unit. 
        // It is used to ensure data consistency and to prevent concurrent access conflicts.

    // 7️⃣ Relationships: 
        // Relationships are used to model complex data relationships between tables. 
        // They can be one-to-one, one-to-many, many-to-one, or many-to-many.


//* ****************************************************
//* 📌 How Does a DBMS Work Internally ?
//* ****************************************************

    // 1️⃣ Data Storage:
        // The DBMS decides how to store data on the computer’s disk in an efficient way (you don’t need to worry about this—it’s automatic).

    // 2️⃣ Query Processing:
        // When we ask the DBMS for data (e.g., “Show me all students with grade A”), 
        // it translates your request into a language the database understands, like SQL (more on this soon), and fetches the data.

    // 3️⃣ Data Security:
        // The DBMS protects the data with passwords, user permissions, and encryption so only authorized people can access it.

    // 4️⃣ Concurrency Control:
        // If multiple people are using the database at once (e.g., teachers updating grades), 
        // the DBMS ensures changes don’t mess up the data.

    // 5️⃣ Backup and Recovery:
        // The DBMS keeps copies of the data and can restore it if something goes wrong (like a power failure).


//* ****************************************************
//* 📌 ACID Properties of DBMS (Important)
//* ****************************************************

    // 1️⃣ Atomicity (All-or-Nothing Principle): 
        // Ensures that a transaction is treated as a single, indivisible unit.
        // "Either all operations of the transaction are completed, or none are".
        // If any part fails, the entire transaction is rolled back.

        //* Example:
            // Imagine transferring $100 from Account A to Account B:
                // 1️⃣ Subtract $100 from Account A.
                // 2️⃣ Add $100 to Account B.

            // If the system crashes after step 1 but before step 2, 
            // Atomicity ensures the whole transaction is undone (rolled back), 
            // so Account A doesn’t lose money without Account B gaining it.


    // 2️⃣ Consistency (Valid State Before & After): 
        // Ensures that a transaction brings the database from one valid state to another.
        // All data rules (constraints, triggers, foreign keys) must be satisfied.

        //* Example:
            // A rule says bank accounts can’t have a negative balance.
            // If you try to withdraw $200 from an account with only $150, 
            // Consistency stops the transaction because it would break the rule. 
            // The database stays valid—no negative balances!


    // 3️⃣ Isolation (Transactions Don’t Interfere): 
        // Transactions happen separately from each other. One transaction’s changes aren’t visible to others until it’s fully done.

        //* Example:
            // 1️⃣ Without Isolation (Problem):
                // User 1 reads balance ($100).
                // User 2 reads balance ($100).
                // User 1 withdraws 60 -> Newbalance:40.
                // User 2 withdraws $70 → Overdraft! (Because User 2 saw an outdated balance).

            // 2️⃣ With Isolation (Solution):
                // Transactions run in a controlled order (e.g., User 2 waits until User 1 finishes).


    // 4️⃣ Durability (Permanent Once Committed): 
        // Once a transaction is committed, its changes persist even after a system crash.
        // Achieved using transaction logs (records all changes before applying them).

        //* Example:
            // You update your online shopping cart and click “Save.”
            // Durability means that even if the server crashes a second later, 
            // your cart is still saved because the DBMS wrote it to permanent storage (like a hard drive).


//* ****************************************************
//* 📌 How ACID Works Together
//* ****************************************************

    // Think of a bank as an example:
        // You transfer $100 from your savings to your checking account.
        // Atomicity: Either both accounts update, or neither does.
        // Consistency: Your total money stays the same (no magical extra cash!).
        // Isolation: No one else sees your accounts mid-transfer.
        // Durability: After the transfer, the change is saved forever, even if the bank’s system crashes.