import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="div" gutterBottom>
            <img src="/Images/Logo.png" alt="Logo" height="50" />
          </Typography>
          <Typography variant="body2" gutterBottom>
            &copy; 2024 BladeLegacy. All rights reserved.
          </Typography>
        </Grid>
        {/* Second Column */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="div" gutterBottom>
            <img src="/Images/Icon.png" alt="Logo" height="50" />
          </Typography>
          <Typography variant="body2" gutterBottom>
            Swords | Pricing | Blog | Login
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
