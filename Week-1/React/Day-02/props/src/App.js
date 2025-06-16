import React from 'react';
import ProfileCard from './components/ProfileCard';
import users from './data/users';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🌟 Team Profiles</h1>
      <div className="profile-list">
        {users.map((user, index) => (
          <ProfileCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
}

export default App;
