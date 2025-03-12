//* ****************************************************
//* 📌 React useParams Hook
//* ****************************************************

    // "useParams" is a React hook provided by React Router that allows you to access dynamic route parameters in your component.
    // It returns an object of key-value pairs, where the keys are the route parameter names and the values are the parameter values.
    // Route parameters are dynamic segments in a URL (e.g., /users/:id), and "useParams" helps you extract these values.


//* 📌 Why Use useParams?
    // ✅ To access dynamic data from the URL (e.g., user IDs, product IDs, etc.).
    // ✅ To create flexible and reusable components that depend on URL data.
    // ✅ To avoid hardcoding values in your components.


//* 📌 Syntax
    const params = useParams();

    // params: An object containing the route parameters.
    // The keys are the parameter names, and the values are the parameter values.

    // For example, if the route is "/users/:id", and the URL is "/users/1", then params will be "{ id: '1' }".


//* 📌 Key Points About useParams
    // 1️⃣ Route parameters are defined in the route path using a colon (:) followed by a parameter name (e.g., /users/:id).
    // 2️⃣ The "useParams" hook returns an "object" containing the route params.
    // 3️⃣ You can define multiple route params in a single path (e.g., /users/:userId/posts/:postId).
    // 4️⃣ Route params are required by default. To make them optional, use a "?" (e.g., /users/:id?).


//* ****************************************************
//* 📌 Example 1: Blog Post Page
//* ****************************************************

    import React, { BrowserRouter, Routes, Route, Link, useParams } from 'react-router';

    // Sample blog post data with an ID, title, and content
    const posts = [
        { id: 201, title: 'Introduction to React', content: 'React is a JavaScript library for building user interfaces.' },
        { id: 202, title: 'React Hooks Explained', content: 'Hooks allow you to use state and other React features in functional components.' },
    ];

    export default function App() {
        return (
            // Enables client-side routing
            <BrowserRouter>
                <nav>
                    <Link to="/posts/201">Introduction to React</Link>
                    <Link to="/posts/202">React Hooks Explained</Link>
                </nav>

                <Routes>
                    // Dynamic route that loads BlogPost component when a post ID is in the URL
                    <Route path="/posts/:postId" element={<BlogPost posts={posts} />} />
                </Routes>
            </BrowserRouter>
        )
    }

    // Component to display the blog post based on the URL parameter
    function BlogPost({ posts }) {
        // Extracts the postId parameter from the URL
        const { postId } = useParams();

        // Finds the matching post from the posts array
        const post = posts.find((post) => post.id === parseInt(postId));

        // If the post does not exist, display a "Post not found" message
        if(!post)
            return <h1>Post not found</h1>

        // Render the blog post
        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        )
    }


//* ****************************************************
//* 📌 Example 2: Product Details Page
//* ****************************************************

    import React, { BrowserRouter, Routes, Route, Link, useParams } from 'react-router';

    // Sample product data with an ID, name, and price
    const products = [
        { id: 101, name: 'Laptop', price: 999.99 },
        { id: 102, name: 'Smartphone', price: 499.99 },
    ];

    export default function App() {
        return (
            <BrowserRouter>
                <nav>
                    <Link to="/products/101">Laptop</Link>
                    <Link to="/products/102">Smartphone</Link>
                </nav>

                <Routes>
                    // Route for product details, using dynamic parameter ":id"
                    <Route path="/products/:id" element={<ProductDetails products={products} />} />
                </Routes>
            </BrowserRouter>
        );
    }

    // Component to display product details based on the URL parameter
    function ProductDetails({ products }) {
        // Extract the product ID from the URL
        const { id } = useParams();
        
        // Find the product that matches the extracted ID
        const product = products.find((product) => product.id === parseInt(id));

        // If no product is found, show an error message
        if(!product)
            return <h1>Product not found</h1>;

        // Render the product details
        return (
            <div>
                <h1>Product Details</h1>
                <p>Name: {product.name}</p>
                <p>Price: ${product.price}</p>
            </div>
        );
    }


//* ****************************************************
//* 📌 Example 3: User Profile Page
//* ****************************************************

    import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router';

    // Sample user data array containing objects with user details
    const usersData = [
        {id: 1, firstName: "Suraj", email: "suraj@example.com", phone: "123-456-7890", address: "123 Main St, Anytown, USA"},
        {id: 2, firstName: "Srj", email: "srj@example.com", phone: "123-456-0120", address: "456 Main St, Anytown, USA"},
    ];


    function App() {
        return (
            <BrowserRouter>
                <nav>
                    <Link to="/users/1">User 1</Link>
                    <Link to="/users/2">User 2</Link>
                </nav>

                <Routes>
                    <Route path="/users/:userId" element={<UserInfo usersData={usersData} />} />
                </Routes>
            </BrowserRouter>
        )
    }

    function UserInfo({ usersData }) {
        // Get the userId parameter from the URL
        const { userId } = useParams();

        // Find the user based on the extracted userId
        const user = usersData.find((user) => user.id === parseInt(userId));

        // If user is not found, display an error message
        if(!user)
            return <p>User not found</p>;

        // Render the user information
        return (
            <div>
                <h1>User Information</h1>
                <p>Name: {user.firstName}</p>
                <p>Email: {user.email}</p>
            </div>
        )
    }


//* ****************************************************
//* 📌 Example 4: Nested Route Params
//* ****************************************************

    import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router';

    // Sample users data with orders
    const users = [
        {
            id: 1,
            name: 'Suraj Adhikari',
            orders: [
                { id: 101, product: 'Laptop', price: 999.99 },
                { id: 102, product: 'Smartphone', price: 499.99 },
            ],
        },
        {
            id: 2,
            name: 'Jane Smith',
            orders: [
                { id: 103, product: 'Tablet', price: 299.99 },
            ],
        },
    ];

    function App() {
        return (
            <BrowserRouter>
                // Navigation links to specific user orders
                <nav>
                    <Link to="/users/1/orders/101">John's Laptop Order</Link>
                    <Link to="/users/2/orders/103">Jane's Tablet Order</Link>
                </nav>

                <Routes>
                    // Define route for order details using dynamic route parameters
                    <Route path="/users/:userId/orders/:orderId" element={<OrderDetails users={users} />} />
                </Routes>
            </BrowserRouter>
        );
    }

    // Component to display order details for a specific user and order
    function OrderDetails({ users }) {
        // Get dynamic parameters from the URL
        const { userId, orderId } = useParams();

        // Find the user matching the userId in the URL
        const user = users.find((user) => user.id === parseInt(userId));
        
        // Find the order matching the orderId for the selected user
        const order = user?.orders.find((order) => order.id === parseInt(orderId));

        // If the user or order is not found, display an error message
        if(!user || !order)
            return <p>Order not found</p>;

        return (
            <div>
                <h1>Order Details</h1>
                <p>User: {user.name}</p>
                <p>Product: {order.product}</p>
                <p>Price: ${order.price}</p>
            </div>
        );
    }
