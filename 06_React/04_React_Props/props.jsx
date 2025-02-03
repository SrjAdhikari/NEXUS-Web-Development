//* ****************************************************
//* Props In React
//* ****************************************************


//* What are Props?
    // Props (short for "properties") are a way to pass data from a parent component to a child component in React.
    // Props are read-only, meaning the child component cannot modify the props it receives.
    // Props make components reusable and dynamic by allowing them to accept custom data.


//* Why use Props?
    // 1. Dynamic Rendering: Pass data that changes (e.g., names, colors, or lists).
    // 2. Reusability: Create a single component and customize it with different props.
    // 3. Parent-to-Child Communication: Send data from parent components to child components.


//* How Props Work?
    // 1. Parent Component: Passes data to the child component as an object of props.
    // 2. Child Component: Receives props as a parameter and uses them to render the UI.


//* ****************************************************

//* Syntax:
    // 1. Passing Props (Parent to Child):
        // Props are passed to a component as "attributes" in JSX.
        // <ChildComponent propName1={value1} propName2={value2} />

    // 2. Receiving Props (Child to Parent):
        // Props are received in the child component as a "function parameter" (usually named props).
        // function ChildComponent(props) {
        //     return (
        //         <div>
        //             <p>{props.propName1}</p>
        //             <p>{props.propName2}</p>
        //         </div>
        //     );
        // }


//* ****************************************************

import React from "react";
import ReactDOM from "react-dom/client";

// Get the root element where the React application will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));


//* ****************************************************
//* Example: 1. User Info Card Component
//* ****************************************************

// Using a functional component with props to render dynamic data
function UserInfo(props) {
    return (
        <div style={{ border: "1px solid black", padding: "10px", textAlign: "center", fontWeight: "bold" }}>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Profession : {props.profession}</p>
        </div>
    );
}


//* ****************************************************
//* Example: 2. E-Commerce Product Card Component
//* ****************************************************

// Child component with props to create a product card component
function ProductCard(props) {
    return (
        <div style={{border: "1px solid black", padding: "5px", width: "200px", textAlign: "center"}}>
            <img src={props.img} alt={props.name} style={{ height: "150px" }} />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={() => alert(`Added ${props.name} to cart!`)}>
                Add to Cart
            </button>
        </div>
    );
}


//* ****************************************************
//* Example: 3. Movie Card Component
//* ****************************************************

// Child component with props to create a movie card component
function MovieCard(props) {
    return (
        <div style={{ border: "1px solid black", padding: "5px", width: "180px", textAlign: "center" }}>
            <img src={props.poster} alt={`${props.title} Poster`} style={{ width: "100%" }} />
            <h3>{props.title}</h3>
            <p>Genre: {props.genre}</p>
            <p>Rating: {props.rating}</p>
        </div>
    );
}


//* ****************************************************
//* App (Parent) Component To Render Child Components
//* ****************************************************
function App() {
    return (
        <>
            <h2 style={{ color: "tomato", fontSize: "40px", textDecoration: "underline", textAlign: "center" }}>
                React Props
            </h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
                <UserInfo name="Suraj" age="27" profession="Software Engineer" />
                
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <ProductCard
                        img="https://img.freepik.com/free-vector/vintage-beautiful-watches-design-concept_1284-38365.jpg"
                        name="Stylish Watch"
                        price="$49.99"
                        />
                    <ProductCard
                        img="https://img.freepik.com/free-vector/hand-drawn-running-shoes-cartoon-illustration_23-2150985777.jpg"
                        name="Running Shoes"
                        price="$89.99"
                        />
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <MovieCard
                        poster="https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg"
                        title="Inception"
                        genre="Sci-Fi"
                        rating="8.8/10"
                        />
                    <MovieCard
                        poster="https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                        title="The Godfather"
                        genre="Crime"
                        rating="9.2/10"
                        />
                    <MovieCard
                        poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbm28EZhooHofMhqRbjqYXm58jMZo87-n1A&s"
                        title="Frozen"
                        genre="Animation"
                        rating="7.5/10"
                        />
                </div>
            </div>
        </>
    );
}

// Render the App component
root.render(<App />);