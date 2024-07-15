import axios from 'axios';
import React, { useState } from 'react';
import styles from './Register.module.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/register', {
        username,
        email,
        password,
        nickname,
        dateOfBirth,
      });
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error(
        'Registration failed',
        error.response ? error.response.data : error.message,
      );
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Register</h2>
        <div>
          <label>
            Username<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>
            Email<span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>
            Password<span className={styles.required}>*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>
            Nickname<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <label>
            Date of Birth<span className={styles.required}>*</span>
          </label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
