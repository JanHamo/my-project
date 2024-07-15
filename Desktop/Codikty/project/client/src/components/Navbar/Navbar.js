import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <AppBar position="static" className={styles.navbar}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Codikty
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/login">
          Login
        </Button>
        <Button color="inherit" component={RouterLink} to="/articles">
          Articles
        </Button>
        <Button color="inherit" component={RouterLink} to="/register">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
