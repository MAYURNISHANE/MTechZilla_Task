import React, { useState } from 'react';
import axios from 'axios';

function Card() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUserData(response.data);
        }
        catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUserData();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={handleChange}
                />
                <button type="submit">Show Information</button>
            </form>
            <div className='card'>
                {userData ? <>
                    <div className="user-card1">
                        <img src={userData.avatar_url} alt={userData.login} />
                        <h2>{userData.name}</h2>
                        <p>Username: {userData.login}</p>
                        <p>Public Repos: {userData.public_repos}</p>
                        <p>Public Gists: {userData.public_gists}</p>
                        <p>Profile created at: {new Date(userData.created_at).toLocaleDateString()}</p>
                    </div>
                </> :
                    <>github user details</>
                }
            </div>
        </div>
    );
}

export default Card;
