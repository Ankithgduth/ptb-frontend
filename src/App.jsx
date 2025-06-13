import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'ptb2025') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect password. Try again.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <h1>Login Page (password-based)</h1>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Welcome to PTB Dashboard</h1>
      <p>This is a placeholder. Live trade view, ML metrics, and reports coming next.</p>
    </div>
  );
}

export default App;
