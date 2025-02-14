import React, { useState } from 'react'

const Header = ({ fetchUserData }) => {
    // State to store the input search value
    const [searchProfile, setSearchProfile] = useState("");

    return (
        <div className="header">
            <img src="./src/assets/github_logo.png" alt="GitHub Logo" />
            <h1>GitHub User Profile Viewer</h1>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Enter GitHub Username or User Count"
                    id="search"
                    name="search"
                    value={searchProfile}
                    autoComplete="off"

                    // Update state on input change
                    onChange={(e) => setSearchProfile(e.target.value)}
                />

                {/* Button to trigger fetching user data based on input value */}
                <button onClick={() => fetchUserData(searchProfile)}>Search</button>
            </div>
        </div>
    )
}

export default Header