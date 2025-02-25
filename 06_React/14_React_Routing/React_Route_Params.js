//* ****************************************************
//* 📌 React Route Params
//* ****************************************************

    // Route Params are dynamic segments in a URL that allow you to pass data to a component.
    // They are defined in the route path using a colon (:) followed by a parameter name (e.g., /users/:id).
    // The "useParams" hook is used to access these dynamic values in your component.

    // These values are useful when we need to display details for specific items, such as:
        // 1️⃣ A product details page (/product/5) => "5" is a dynamic parameter (e.g., Product ID) that can change for different products.
        // 2️⃣ A user profile page (/user/john)    => "john" is a dynamic parameter (e.g., User ID) that can change for different users.
        // 3️⃣ A blog post (/post/react-routing)   => "react-routing" is a dynamic parameter (e.g., Post ID) that can change for different posts.


//* 📌 Why Use Route Params?
    // 1️⃣ To create dynamic routes that handle variable data (e.g., user IDs, product IDs, etc.).
    // 2️⃣ To make your application more scalable and maintainable.
    // 3️⃣ To avoid hardcoding values in your routes.


//* 📌 Syntax of Route Params
    // 1️⃣ Define Route Params
        // Use a colon (:) followed by a parameter name (e.g., /users/:id) in the route path.

        //* Example:
            <Route path="/users/:id" element={<userProfile />} />
            // Here, ":id" is a route param. It represents the dynamic parameter that will be passed to the userProfile component.


    // 2️⃣ Access Route Params
        // Use the "useParams" hook to access the route parameters in the component.

        //* Example:
            const { id } = useParams();


//* 📌 Key Points About Route Params
    // 1️⃣ Route params allow you to create dynamic URLs (e.g., /users/1, /users/2).
    // 2️⃣ The "useParams" hook returns an "object" containing the route params.
    // 3️⃣ You can define multiple route params in a single path (e.g., /users/:userId/posts/:postId).
    // 4️⃣ Route params are required by default. To make them optional, use a "?" (e.g., /users/:id?).


//* 📌 Example 1:

    import React, { BrowserRouter, Routes, Route, Link, useParams } from 'react-router'

    function App() {
        return (
            <BrowserRouter>
                <nav>
                    <Link to="/users/1/posts/101">User 1, Post 101</Link>
                    <Link to="/users/2/posts/102">User 2, Post 102</Link>
                </nav>

                <Routes>
                    <Route path="/users/:userId/posts/:postId" element={<PostDetails />} />
                </Routes>
            </BrowserRouter>
        )
    }

    // PostDetails Component (Child Route)
    function PostDetails() {
        // Access multiple route params
        const { userId, postId } = useParams();

        return(
            <div>
                <h1>user ID: {userId}, Post ID: {postId}</h1>
            </div>
        );
    }


    //* 📌 Explanation:
        // 1️⃣ The route "/users/:userId/posts/:postId" defines two dynamic segments (":userId "and ":postId").
        // 2️⃣ The "useParams" hook is used to access both "userId" and "postId" in the "PostDetails" component.
        // 3️⃣ When you navigate to "/users/1/posts/101", the component displays "User ID: 1" and "Post ID: 101".


//* 📌 Example 2:

    import React, { BrowserRouter, Routes, Route, Link, useParams } from 'react-router'

    const App = () => {
        return (
            <BrowserRouter>
                <nav>
                    <Link to="/product/1">Product 1</Link>
                    <Link to="/product/2">Product 2</Link>
                    <Link to="/product/3">Product 3</Link>
                </nav>

                <Routes>
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </BrowserRouter>
        )
    }

    const ProductDetail = () => {
        const { id } = useParams();

        return (
            <div>
                <h1>Product Details</h1>
                <p>You are viewing details of Product ID: {id}</p>
            </div>
        );
    }


    //* 📌 Explanation:
        // 1️⃣ The user clicks on a link, e.g., Product 1 (/product/1).
        // 2️⃣ React Router matches the route pattern "/product/:id" and loads "ProductDetail".
        // 3️⃣ The "useParams()" hook extracts the id (1).
        // 4️⃣ The "ProductDetail" component displays:
            // "Product Details"
            // "You are viewing details of Product ID: 1"