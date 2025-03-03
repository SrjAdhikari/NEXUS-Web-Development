import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Slicer'

const CoinCard = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.coinSlice);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchData(50));
    }, []);

    if (loading) return <h1 className="loading">Loading...</h1>;
    if (error) return <h1 className="error">Error occurred</h1>;

    const filteredCoins = data.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Search for a coin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="coin-container">
                {filteredCoins.length > 0 ? 
                    (filteredCoins.map((coin) => (
                        <div className="coin-card" key={coin.id}>
                            <img className="coin-image" src={coin.image} alt={coin.name} />
                            <h3 className="coin-title" >{coin.name}</h3>
                            <p className="coin-info" >Rank : {coin.market_cap_rank}</p>
                            <p className="coin-info" >Price : ${coin.current_price}</p>
                            <p className="coin-info" >Market Cap Rank : {coin.market_cap_rank}</p>
                        </div>
                    ))) : (
                        <h2 className="no-result">Coin not found</h2>
                    )
                }
            </div>
        </div>
    );
}

export default CoinCard;