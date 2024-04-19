import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const features = [
    {
      title: 'Swords',
      description: 'View Swords (Login) | Add Swords (Admin) | View Sword Details (Login)',
      image: '/Images/Sword.jpeg',
    },
    {
      title: 'Maker',
      description: 'View Makers (Login) | Add Makers (Admin) | View Maker Details (Login)',
      image: '/Images/Maker.jpeg',
    },
    {
      title: 'Material',
      description: 'View Materials (Login) | Add Materials (Admin) | View Material Details (Login)',
      image: '/Images/Material.jpg',
    },
    {
        title: 'Era',
        description: 'View Eras (Login) | Add Eras (Admin) | View Era Details (Login)',
        image: '/Images/Era.jpeg',
    },
    {
        title: 'Type',
        description: 'View Types (Login) | Add Types (Admin) | View Type Details (Login)',
        image: '/Images/Type.jpeg',
    },
    {
        title: 'User',
        description: 'Register | Login | Logout',
        image: '/Images/User.jpeg',
    }
  ];

  return (
    <div style={{ margin: '2rem' }}>
        <Slider {...settings}>
            {features.map((feature) => (
                <FeatureCard key={feature.title} title={feature.title} description={feature.description} image={feature.image} />
            ))}
        </Slider>
    </div>
  );
};

export default FeatureSection;
