import React, { useEffect, useState, useCallback } from 'react'
import Header from './Header';

const Body = () => {
    // State to hold the list of GitHub users fetched from the API
    const [usersData, setUsersData] = useState([]);

    // Memoized function to fetch user data from GitHub API based on the query input (search term or user count).
    // It handles empty, numeric, and non-numeric queries differently.
    const fetchUserData = useCallback(async (query) => {
        try {
            // Variable to store the API URL
            let url;

            // Case 1: If the input is empty, default to fetching 10 users
            if(query.trim() === "") {
                const random = Math.floor(Math.random() * 10000) + 1;
                url = `https://api.github.com/users?since=${random}&per_page=10`;
            }

            // Case 2: If the input is numeric, use it as the count of profiles to fetch
            else if (!isNaN(query)) {
                // Convert the input to a number and fetch that many users
                const userCount = Number(query);
                const random = Math.floor(Math.random() * 10000) + 1;
                url = `https://api.github.com/users?since=${random}&per_page=${userCount}`;
            }

            // Case 3: Otherwise, treat the input as a GitHub username search
            else {
                // Construct a search URL to fetch users based on the input search query (e.g., a username)
                url = `https://api.github.com/search/users?q=${query}`;
            }

            // Fetch data from the GitHub API using the constructed URL
            const response = await fetch(url);
            const data = await response.json();

            // If the response contains 'items' (indicating a search query), set the users data to the search results
            if(data.items)
                // Set the user data from search results
                setUsersData(data.items);
            else
                // If 'items' doesn't exist (e.g., in the users list endpoint), set data directly
                setUsersData(data);
            
        } catch (error) {
            // Log any errors encountered during the fetch
            console.error("Error fetching data:", error);
        }
    }, [])

    // useEffect hook to trigger fetching user data on component mount
    // On initial render, fetch 10 users by default
    useEffect(() => {
        fetchUserData("");
    }, []);

    return (
        <div>
            <Header fetchUserData={fetchUserData} />
            <div className="card-container">
                {usersData.map((user) => {
                    return (
                        <div className="card" key={user.id}>
                            <img src={user.avatar_url} alt={user.login} />
                            <h2>{user.login}</h2>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Body