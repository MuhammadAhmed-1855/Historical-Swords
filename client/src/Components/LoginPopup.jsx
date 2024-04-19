import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import Register from '../API/User/Register';
import Login from '../API/User/Login';

const LoginPopup = ({ open, handleClose }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ email: '', username: '', password: '' });
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = () => {
    // Add your login logic here
    console.log('Login data:', loginData);
    Login(loginData, dispatch);
    handleClose();
  };

  const handleRegisterSubmit = () => {
    // Add your registration logic here
    console.log('Register data:', registerData);
    Register(registerData);
    handleClose();
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle sx={{ backgroundColor: 'red', color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {isLoginForm ? 'Login' : 'Register'}
        <IconButton onClick={handleClose} size="small" sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ width: '40vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        {isLoginForm ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <Button variant="contained" color="primary" onClick={handleLoginSubmit}>
              Login
            </Button>
            <Typography variant="body2" style={{ cursor: 'pointer', textAlign: 'center', marginTop: '0.5rem' }} onClick={toggleForm}>
              Don't have an account? Register here.
            </Typography>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
            />
            <TextField
              label="Username"
              variant="outlined"
              name="username"
              value={registerData.username}
              onChange={handleRegisterChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              value={registerData.password}
              onChange={handleRegisterChange}
            />
            <Button variant="contained" color="primary" onClick={handleRegisterSubmit}>
              Register
            </Button>
            <Typography variant="body2" style={{ cursor: 'pointer', textAlign: 'center', marginTop: '0.5rem' }} onClick={toggleForm}>
              Already have an account? Login here.
            </Typography>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginPopup;
