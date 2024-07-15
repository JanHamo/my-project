import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <Box component="footer" className={styles.footer} py={2}>
      <Typography variant="body2" color="textSecondary" align="center">
        &copy; 2024 Codikty. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
