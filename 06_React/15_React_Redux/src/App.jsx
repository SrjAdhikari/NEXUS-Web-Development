import React from 'react'
import { Provider } from 'react-redux'

// import store from './Counter_App/store'
// import Counter from './Counter_App/Counter'

import store from './Custom_Counter_App/Custom_Store'
import Custom_Counter from './Custom_Counter_App/Custom_Counter'
import Main_Counting from './Custom_Counter_App/Main_Counting'

const App = () => {
    return (
        <div className="app-container">
            {/* Wrap the application with the "Provider" component to make the Redux store accessible to all components */}
            <Provider store={store}>
                {/* <Counter /> */}
                <Main_Counting />
                <Custom_Counter />
            </Provider>
        </div>
    )
}

export default App