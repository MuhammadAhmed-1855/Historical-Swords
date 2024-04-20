import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SwordCard = ({ sword }) => {
    return (
        <Card sx={{ width: '30vw', marginLeft: '5vw', backgroundColor: 'rgba(255, 0, 0, 0.2)', color: 'white' }}>
            <CardMedia
                component="img"
                height="200"
                image={sword.image}
                alt={sword.name}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {sword.name} ( {sword.manufacturedYear} )
                </Typography>
                <Typography variant="body2" component="p" sx={{ paddingTop: '2rem' }} >
                    {sword.description}
                </Typography>
                <Typography >
                    <h2>Era: </h2>{sword.eraNames.join(', ')}
                </Typography>
                <Typography >
                    <h2>Type: </h2>{sword.typeNames.join(', ')}
                </Typography>
                <Typography >
                    <h2>Material: </h2>{sword.materialNames.join(', ')}
                </Typography>
                <Typography >
                    <h2>Maker: </h2>{sword.makerNames.join(', ')}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SwordCard;
