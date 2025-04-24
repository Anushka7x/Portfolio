import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Typography, Grid, Avatar, Paper, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import WaveBackground from '../components/WaveBackground';

const skills = [
  'React', 'Redux', 'JavaScript', 'TypeScript', 'Material UI',
  'Axios', 'HTML', 'CSS', 'Git', 'Responsive Design'
];

const About = () => {
  return (
    <PageWrapper>
      <Box sx={{ position: 'relative' }}>
        {/* Top Decorative Wave */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 0 }}>
          <WaveBackground />
        </Box>

        {/* Content with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            About Me
          </Typography>
          <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={12} md={7}>
              <Paper elevation={3} sx={{ p: 4, backgroundColor: '#ffffff' }}>
                <Typography variant="body1" paragraph>
                  I’m Anushka, a frontend developer with a strong passion for design systems, clean code, and building smooth user experiences.
                </Typography>
                <Typography variant="body1" paragraph>
                  I focus on writing scalable, reusable components with frameworks like React and Material UI, and I enjoy bringing ideas to life with subtle animations and interactions.
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
                  Technologies I Use:
                </Typography>
                <Grid container spacing={1} mt={1}>
                  {skills.map((skill, i) => (
                    <Grid item key={i}>
                      <Chip label={skill} variant="outlined" color="primary" />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5} textAlign="center">
              <Avatar
                alt="Anushka Dubey"
                src="https://themewagon.github.io/Kelly/assets/img/profile-img.jpg"
                sx={{ width: 220, height: 220, mx: 'auto', boxShadow: 3 }}
              />
            </Grid>
          </Grid>
        </motion.div>

        {/* Bottom Decorative Wave */}
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 0 }}>
          <WaveBackground flip />
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default About;
