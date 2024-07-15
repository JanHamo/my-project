// CloudOffice page
import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Calculator from '../../components/Calculator/Calculator';
import styles from './CloudOffice.module.css';

function CloudOffice() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const toggleCalculator = () => {
    setIsCalculatorOpen(!isCalculatorOpen);
  };

  return (
    <Container className={styles.cloudOffice} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Cloud Office Page
      </Typography>
      <Button variant="contained" color="primary" onClick={toggleCalculator}>
        {isCalculatorOpen ? 'Close Calculator' : 'Open Calculator'}
      </Button>
      {isCalculatorOpen && <Calculator />}
    </Container>
  );
}

export default CloudOffice;
