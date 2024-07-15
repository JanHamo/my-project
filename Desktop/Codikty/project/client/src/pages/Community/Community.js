// Community page
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styles from './Community.module.css';

function Community() {
  return (
    <Container className={styles.community} maxWidth="lg">
      <Box className={styles.card} p={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Communities Page
        </Typography>
        <Typography variant="body1">This is the communities page.</Typography>
      </Box>
    </Container>
  );
}

export default Community;
