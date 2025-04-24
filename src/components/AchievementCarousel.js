import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardContent } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    title: '🌐 Built Corporate Travel Management System',
    description: 'Developed a feature-rich dashboard using React, Redux, Tailwind CSS, and API integration, enabling efficient trip planning, bookings, and approvals across organizations.'
  },
  {
    title: '🪴 Created Paradise Nursery E-Commerce Platform',
    description: 'Designed a full-featured online plant store with category-wise browsing, cart, admin order panel, and checkout flow using React, Redux Toolkit, and Material UI.'
  },
  {
    title: '🐾 Launched Street Animal Care Platform',
    description: 'Developed a community-driven donation and rescue request system for street animals with interactive forms and a public dashboard.'
  },
  {
    title: '💻 Internship at Web N Soft Solutions',
    description: 'Built responsive PHP-based form portals and websites using HTML, CSS, JS, and Bootstrap during a 3-month internship experience.'
  },
  {
    title: '🧠 Delivered Over 10 UI/UX Proofs of Concept',
    description: 'Worked on modern interfaces and responsive layouts in Neutrinos Studio and React, improving usability for internal product showcases.'
  }
];

const AchievementCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, color: '#2E2E2E', mb: 4 }}
      >
        Achievements & Highlights
      </Typography>

      <Slider {...settings}>
        {data.map((item, i) => (
          <Card
            key={i}
            sx={{
              m: 2,
              p: 3,
              background: '#f3f4ff',
              borderRadius: 4,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 24px rgba(163, 191, 250, 0.4)',
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 1, fontSize: '1.2rem', color: '#2c3e50' }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#555', lineHeight: 1.6, fontSize: '1rem' }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default AchievementCarousel;
