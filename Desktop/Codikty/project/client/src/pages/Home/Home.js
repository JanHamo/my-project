import { Container, Typography } from '@mui/material';
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom>
          Home Page
        </Typography>
      </Container>
    </div>
  );
}

export default Home;
