// Import React to enable JSX and component creation
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'

// App Component: Defines the main structure of the application with routing
const App = () => {
    return (
        // BrowserRouter: Enables client-side routing in a React application
        <BrowserRouter>
        <Navbar />
            {/* Routes: Container for defining different page routes */}
            <Routes>
                // Route: Defines individual page paths and their corresponding components
                <Route path="/" element={<Home />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App