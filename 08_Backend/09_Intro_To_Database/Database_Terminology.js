//* ****************************************************
//* 📌 Database Terminology
//* ****************************************************


//* 📌 Normalization
    // Normalization is the process of organizing data in a database to reduce redundancy (repeating data) and improve data integrity (accuracy and consistency).


    //* Why Normalization is Important ?
        // Without normalization, a database can have duplicate data, 
        // which wastes space and can lead to errors (e.g., updating one copy of data but missing another).


    //* Normalization Key Steps:
        // 1️⃣ First Normal Form (1NF): 
            // For a table to be in the first normal form, it must meet the following criteria:
                // ● A single cell must not hold more than one value (atomicity).
                // ● There must be a primary key for identification.
                // ● No duplicated rows or columns.
                // ● Each column must have only one value for each row in the table.


        // 2️⃣ Second Normal Form (2NF):
            // The 1NF only eliminates repeating groups, not redundancy. That’s why there is 2NF.
            // A table is said to be in 2NF if it meets the following criteria:
                // ● It is already in 1NF.
                // ● It has no partial dependencies (non-key columns shouldn’t depend on other non-key columns).


        // 3️⃣ Third Normal Form (3NF): 
            // When a table is in 2NF, it eliminates repeating groups and redundancy, 
            // but it does not eliminate transitive partial dependency.
            // For a table to be in 3NF, it must:
                // ● Be in 2NF.
                // ● Have no transitive partial dependencies (non-key columns shouldn’t depend on other non-key columns).


//* ****************************************************
//* 📌 Scaling
//* ****************************************************

    // Scaling a database means increasing the capacity to handle more data. 
    // It can be done by adding more servers or by scaling out to a cloud service.
    // There are two ways to scale: Vertical (up) and Horizontal (out).
    

    //* Vertical Scaling
        // Definition: Adding more resources (power) to a single server (more CPU, RAM, storage).
        // How: Upgrade your existing machine—like turning a small computer into a supercomputer.
        // Example: If your database is slow on a server with 4GB RAM, upgrade it to 16GB RAM.
        // Pros: Simple to implement, no changes to the app needed.
        // Cons: There’s a limit (you can’t keep upgrading forever), expensive hardware.


    //* Horizontal Scaling
        // Definition: Adding more servers to share the work.
        // How: Split the data or workload across multiple machines—like hiring more workers instead of making one worker stronger.
        // Example: Instead of one server handling 1,000 users, use 5 servers, each handling 200 users.
        // Pros: Nearly unlimited scaling, cheaper (use many small machines).
        // Complex—requires splitting data (sharding) or replication, and apps may need redesigning.


    //* Analogy:
        // Vertical = Giving one chef a bigger stove.
        // Horizontal = Hiring more chefs with their own stoves.


//* ****************************************************
//* 📌 Sharding
//* ****************************************************

    // Sharding is splitting a database into smaller pieces (called shards) and storing them on different servers. 
    // It’s a type of horizontal scaling.


    //* How it works:
        // 1️⃣ Data is divided based on a shard key (e.g., user ID, region).
        // 2️⃣ Each shard holds a subset of the data and runs independently.
            // Example:
                // A social media app with 1 million users.
                // Shard 1: Users with IDs 1–500,000.
                // Shard 2: Users with IDs 500,001–1,000,000.
        // 3️⃣ Each shard is on a separate server.
        // 4️⃣ When a user makes a request, the server routes the request to the appropriate shard.


    //* Pros:
        // 1️⃣ Scales easily—add more shards as needed.
        // 2️⃣ Faster queries (each shard has less data to search).
        // 3️⃣ Prevents single point of failure (if one shard goes down, the other shards still work).


    //* Cons:
        // 1️⃣ Complex to manage (e.g., what if a user moves between shards?).
        // 2️⃣ Joins across shards are hard or impossible.
        // 3️⃣ More expensive (more servers, more bandwidth, more data transfer).


//* ****************************************************
//* 📌 Replication (Replica)
//* ****************************************************

    // A replica is a copy of the database running on a different server. Replication means keeping multiple identical copies.
    // Replicas are used for high availability and data redundancy.


    //* Why it is used:
        // 1️⃣ Reliability: If one server fails, others take over.
        // 2️⃣ Performance: Spread read requests across replicas.
        // 3️⃣ Security: If one server is compromised, others are not affected.


    //* Types of Replication:
        // 1️⃣ Master-Slave Replication: One main server (master) handles writes, other replicas (slaves) handle reads.
        // 2️⃣ Master-Master Replication: All servers can handle writes and sync with each other.


    //* Example:
        // A blog site
            // Master database: Users update posts here.
            // Replica databases: Readers fetch posts from these copies.
        // If the master crashes, a replica can take over.


//* ****************************************************
//* 📌 Load Balancer
//* ****************************************************

    // A load balancer is like a traffic cop that distributes incoming requests across multiple servers to avoid overloading any one server.
    // Ensures no single server gets overwhelmed, improving speed and reliability.


    //* How it works:
        // 1️⃣ Sits between users and servers.
        // 2️⃣ Decides which server gets each request based on rules (e.g., least busy server).
        // 3️⃣ Distributes requests across multiple servers.


    //* Example:
        // 1,000 users visit a website.
        // Load balancer sends 333 requests to Server A, 333 to Server B and remaining 334 to Server C.


//* ****************************************************
//* 📌 CAP Theorem
//* ****************************************************

    // The "CAP Theorem" says that in a distributed database (one spread across multiple servers), 
    // you can only fully guarantee "two out of three" properties: "Consistency", "Availability", and "Partition Tolerance".


    //* Three Properties:
        // 1️⃣ Consistency (no outdated copies): Every server has the same data at the same time (no outdated copies).
        // 2️⃣ Availability (no data loss): The system always responds to requests, even if it’s busy or some servers fail.
        // 3️⃣ Partition Tolerance (don’t crash): The system keeps working even if servers can’t talk to each other (network splits).


    //* Why only two out of three?
        // In real life, networks fail (partitions happen). You must choose:
        // 1️⃣ CP (Consistency + Partition Tolerance): 
            // Prioritize accurate data, even if some requests fail during a network issue (e.g., banks).

        // 2️⃣ AP (Availability + Partition Tolerance): 
            // Keep responding, even if data might be slightly out of sync (e.g., social media).

        // 3️⃣ CA (Consistency + Availability): 
            // Rare in distributed systems, as it assumes no partitions (works in single-server setups).


    //* Example:
        // Bank (CP): If servers can’t sync, it stops withdrawals to avoid errors (no availability during partition).
        // Social Media (AP): You see posts or comments even if some servers are out of sync (might miss a few updates).