import React, { useState } from 'react';
import axios from 'axios';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // avoid page refresh
    try {
      const response = await axios.post('http://127.0.0.1:8000/user/auth/', { email, password });
      console.log(response.data);
      alert('Well done');
    } catch (error) {
      console.error(error);
      alert('Error' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} class='auth-form'>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}


