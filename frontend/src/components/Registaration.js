import React, { useState } from 'react';
import axios from 'axios';

export const Registaration = () => {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { first_name, last_name, email, password, phone };
    axios.post('http://127.0.0.1:8000/user/signup/', formData)
      .then(response => {
        console.log(response.data);
        alert('Well done');
        // other success logic here
      })
      .catch(error => {
        console.error(error);
        alert('Error' + error.message);
        // other error handling here
      });
  };

  return (
    <form onSubmit={handleSubmit} class="registration-form">
      <h2>Регистрация</h2>
      <label htmlFor="first_name">Имя:</label>
      <input type="text" id="first_name" name="first_name" value={first_name} onChange={(e) => setfirst_name(e.target.value)} required /><br/>

      <label htmlFor="last_name">Фамилия:</label>
      <input type="text" id="last_name" name="last_name" value={last_name} onChange={(e) => setlast_name(e.target.value)} required /><br/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>

      <label htmlFor="password">Пароль:</label>
      <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>

      <label htmlFor="phone">Телефон:</label>
      <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /><br/>
      
      <button type="submit">Зарегестрироваться</button>
    </form>
  )
}

export default Registaration