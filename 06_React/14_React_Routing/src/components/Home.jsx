import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Weklcome to Delicious Bites</h1>
            <p>Your favourite place for delicious food and great ambience</p>
            <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Restaurant"
                style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover"
                }}
            />
        </div>
    );
}

export default Home