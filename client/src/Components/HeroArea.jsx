import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function HeroArea() {
  return (
    <Box
      sx={{
        background: `
          radial-gradient(circle at center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8), #000000 80%),
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url("Images/HeroBG.jpg")
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust height as needed
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to BladeLegacy
      </Typography>
      <Typography variant="h5" gutterBottom>
        Explore the world of historical swords
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
  );
}

export default HeroArea;
