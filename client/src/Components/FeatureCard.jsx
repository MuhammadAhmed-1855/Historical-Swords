import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FeatureCard = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: '75%', borderRadius: '20px', backgroundColor: '#CD5C5C' }}>
      <CardMedia
        component="img"
        alt={title}
        height="170"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" textAlign="center" component="div" sx={{color: 'white', fontFamily: 'inherit'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
