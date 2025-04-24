import React from 'react';
import { Typography, Button, Stack, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WaveBackground from '../components/WaveBackground';
import AchievementCarousel from '../components/AchievementCarousel';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          background: 'linear-gradient(135deg, #F3F4FF 0%, #FCFCFC 100%)'
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <WaveBackground />
        </Box>

        <motion.div
          style={{ zIndex: 2, textAlign: 'center' }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Hello 👋 I’m <span style={{ color: '#6B8DD6' }}>Anushka Dubey</span>
          </Typography>
          <Typography variant="h6" sx={{ color: '#555', maxWidth: 700, mx: 'auto', mb: 4 }}>
            A frontend developer focused on creating clean, animated, and responsive user interfaces using React, Redux & Material UI.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            <Button variant="contained" component={Link} to="/projects">View Projects</Button>
            <Button variant="outlined" component={Link} to="/contact">Contact Me</Button>
          </Stack>

          <Stack direction="row" justifyContent="center" spacing={1} flexWrap="wrap" mb={3}>
            {['React', 'Redux', 'Material UI', 'Animations', 'UI Design'].map((label, i) => (
              <Chip key={i} label={label} variant="outlined" color="primary" />
            ))}
          </Stack>
        </motion.div>
      </Box>

      <Box sx={{ px: 3, py: 8, background: '#f3f4ff' }}>
        <AchievementCarousel />
      </Box>
    </>
  );
};
export default Home;

