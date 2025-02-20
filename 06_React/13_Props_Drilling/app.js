//* ****************************************************
//* Props Drilling In React
//* ****************************************************

    // Props drilling is the process of passing data (props) from a parent component to a deeply nested child component through multiple intermediate components.
    // It’s called "drilling" because the props are passed down through multiple layers of components, like drilling through layers of rock.
    // This can make the code hard to manage and less readable, especially as the application grows.


//* ****************************************************
//* Why Does Props Drilling Happen?
//* ****************************************************

    // 1. In React, data flows in one direction: from parent to child.
    // 2. If a deeply nested child component needs data from a parent, the data must be passed through all the intermediate components, 
    // even if they don’t use the data themselves.


//* ****************************************************
//* How Does Props Drilling Work?
//* ****************************************************

    // 1. Parent Component:
        // The parent component holds the state and passes it down as props to its child component.

    // 2. Intermediate Components:
        // The child component receives the props and passes them down to its own child component.
        // This process continues until the props reach the deeply nested component that needs them.

    // 3. Deeply Nested Component:
        // The final component receives the props and uses them.


//* ****************************************************
//* Example of Props Drilling (Step-by-Step)
//* ****************************************************

    // Let's say we have a User Information component, and the User Name needs to be displayed in a deeply nested component.

    // 1. Parent Component (App):
        // It has the "userName" state.
        // Passes "userName" to "ParentComponent".

    // 2. Intermediate Component (ParentComponent):
        // It receives "userName" as a prop.
        // Passes "userName" to "ChildComponent".

    // 3. Child Component (ChildComponent):
        // It receives "userName" as a prop.
        // Passes "userName" to "GrandChildComponent".

    // 4. Deeply Nested Component (GrandChildComponent):
        // It receives "userName" as a prop.
        // Finally, it displays the "userName".


    import React, { useState } from "react";

    // App Component - The main parent where the state is stored
    export default function App() {
        const [userName, setUserName] = useState("Suraj Adhikari");

        return (
            <div>
                <h1>Parent: User Information</h1>
                <ParentComponent userName={userName} />
            </div>
        );
    }

    // ParentComponent - Also just passing the prop down
    function ParentComponent({userName}) {
        return (
            <ChildComponent userName={userName} />
        )
    }

    // ChildComponent - Just passing the prop down
    function ChildComponent({userName}) {
        return (
            <GrandChildComponent userName={userName} />
        )
    }

    // GrandChildComponent - The actual component that needs the data
    function GrandChildComponent({userName}) {
        return (
            <h2>Grandchild: Hello, {userName}!</h2>
        )
    }


    //* Explanation:
        // In App component, we have a state called "userName" and pass it to "ParentComponent".
        // "ParentComponent", receive "userName" as a prop, but don't use it and forward it to "ChildComponent".
        // "ChildComponent", receive "userName" as a prop, also doesn't use it and forward it to "GrandChildComponent".
        // "GrandChildComponent", finally uses the "userName" to display:


//* ****************************************************
//* How to Avoid Props Drilling?
//* ****************************************************

    // There are better ways to manage state instead of drilling props down:
    // ✅ Context API: A built-in React feature to share state across components without passing props manually.
    // ✅ Redux or Zustand: State management libraries that allow global state management.
    // ✅ React Query/Recoil/Jotai: Advanced state management solutions for large applications.