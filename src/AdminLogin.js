import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import your Firebase authentication config

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin'); // Redirect to admin panel on success
    } catch (error) {
      console.error('Login Error', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Admin Login</h2>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default AdminLogin;
