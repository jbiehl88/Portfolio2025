import React from 'react';
import { Box, Typography, } from '@mui/material';

const Home = () => (
  <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
  }}
  >
    <Typography variant="h3" fontWeight="bold">Jordan Biehl</Typography>
    <Typography variant="h5" gutterBottom>Software Engineer</Typography>
  </Box>
);

export default Home;