//* ****************************************************
//* 📌 React Routing / Router
//* ****************************************************

    // React Router is a library that enables navigation and routing in React applications.
    // It's used to create single-page applications (SPAs) with multiple views (pages) without reloading the browser.

    // With React Router, you can:
        // Define multiple views or pages in your app.
        // Navigate between these views without reloading the page.
        // Dynamically render components based on the URL.


//* 📌 Why Use React Router?
    // 1️⃣ To create multi-page experiences in a single-page application.
    // 2️⃣ To improve user experience by enabling seamless navigation.
    // 3️⃣ To manage application state based on the URL.


// * 📌 Key Concepts In React Router
    // 1️⃣ <BrowserRouter>:
        // Enables client-side routing in a React application.
        // It is the component that manages the browser’s history and navigation
        // It uses the "HTML5 History API" to keep the UI in sync with the URL.
        // It wraps the entire application in a <BrowserRouter> to enable routing throughtout the app.


        //* 📌 Example
        function App() {
            return (
                <BrowserRouter>
                    {/* Your application content, routes and components goes here */}
                </BrowserRouter>
            );
        }


    // 2️⃣ <Routes>:
        // It is used to define the collection of "Route" components.
        // It looks at the URL and renders the first "Route" that match the current URL.
        // It wraps the "Routes" components to handle route matching properly.


        //* 📌 Example
        function App() {
            return (
                // Collection of Route components
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            );
        }


    // 3️⃣ <Route>:
        // A route defines a mapping between a URL path and a component.
        // When the URL matches a path, React Router renders the corresponding component.

        // ✅ Key Props of Route:
            // path: The URL path that the route should match.
            // element: The component to render when the path matches.


        //* 📌 Example
        <>
            // Define a route for the home page
            <Route path="/" element={<Home />} />

            // Define a route for the about page
            <Route path="/about" element={<About />} />
        </>


    // 4️⃣ Nested Routes:
        // Nested Routes allow us to create routes inside other routes.
        // Routes can be nested to create hierarchical navigation.


        //* 📌 Example
        function App() {
            return (
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />}>
                        // Nested routes for the dashboard
                        <Route path="profile" element={<Profile />} ></Route>
                        <Route path="settings" element={<Settings />} ></Route>
                    </Route>
                </Routes>
            );
        }


    // 5️⃣ <Link>:
        // "Link" is used to navigate between different routes in the application.
        // It uses the `to` attribute to specify where the link should navigate to.
        // Instead of using traditional anchor (<a>) tags, we use <Link> to create navigation without reloading the page.


        //* 📌 Example
        function App() {
            return (
                <nav>
                    // Link component replaces traditional anchor(a) tags for seamless navigation 
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            );
        }


    // 6️⃣ <Outlet />:
        // "Outlet" is a placeholder component used in a parent route to render its nested child routes.
        // It is used to display the child routes of a parent route.


        //* 📌 Example
        function App() {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />}>
                            // Nested (child) routes for the dashboard
                            <Route path="analytics" element={<Analytics />} />
                            <Route path="reports" element={<Reports />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            );
        }

        function Dashboard() {
            return (
                <div>
                    <h1>Dashboard</h1>
                    <nav>
                        <Link to="analytics">Analytics</Link>
                        <Link to="reports">Reports</Link>
                    </nav>

                    {/* Child routes (analytics, reports) will render here */}
                    <Outlet />
                </div>
            );
        }

        // Analytics Component (Child Route)
        function Analytics() {
            return <h2>Analytics Page</h2>;
        }
        
        // Reports Component (Child Route)
        function Reports() {
            return <h2>Reports Page</h2>;
        }