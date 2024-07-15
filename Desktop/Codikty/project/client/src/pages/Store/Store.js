// Store page
// client/src/pages/Store/Store.js

import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styles from './Store.module.css';

function Store() {
  return (
    <Container className={styles.store} maxWidth="lg">
      <Box className={styles.card} p={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Store Page
        </Typography>
        <Typography variant="body1">This is the store page.</Typography>
      </Box>
    </Container>
  );
}

export default Store;
