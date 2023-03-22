import React from 'react';
import './loginpage.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function LoginPage1() {

    const navigate = useNavigate();

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('jwtToken', token); // Store JWT in local storage
        // Redirect to profhbhbjbile page or other protected route
        navigate("/profile");
      } else {
        setError('Invalid email or password');
      }
    };
  
  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Username:</label>
          <input type="email" value={username} onChange={(e) => setusername(e.target.value)} />

          {/* <input type="email" id="email" name="email" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />

          {/* <input type="password" id="password" name="password" /> */}
        </div>

        <button type="submit" className="button">Submit</button>
        {error && <div>{error}</div>}



      </form>
    </div>
  );
}

export default LoginPage1;
