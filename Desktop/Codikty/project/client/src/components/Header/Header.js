import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          Codikty
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/articles">
          Articles
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Profile
        </Button>
        <Button color="inherit" component={Link} to="/store">
          Store
        </Button>
        <Button color="inherit" component={Link} to="/community">
          Communities
        </Button>
        <div style={{ marginLeft: 'auto' }}>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            className={styles.loginButton}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/register"
            className={styles.registerButton}
          >
            Register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
