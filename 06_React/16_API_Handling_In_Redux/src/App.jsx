import React from 'react'
import store from './Redux_API/Store'
import { Provider } from 'react-redux'
import CoinCard from './Redux_API/CoinCard'

const App = () => {
    return (
        <Provider store={store}>
            <CoinCard />
        </Provider>
    )
}

export default App