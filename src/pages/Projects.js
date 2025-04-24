import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WaveOverlay from '../components/WaveOverlay';

const projects = [
  {
    title: 'Travel Sync Pro',
    description: 'A travel booking platform with customizable trip packages, integrated dashboard, and real-time API updates.',
    image: 'https://images.unsplash.com/photo-1601909331597-c80bb4c948c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZhbWlseSUyMHZhY2F0aW9ufGVufDB8fDB8fHww',
    tech: ['React', 'Redux', 'Tailwind CSS', 'Axios'],
    link: '#'
  },
  {
    title: 'Paradise Nursery',
    description: 'A modern plant e-commerce app featuring cart functionality, admin order tracking, and responsive design.',
    image: 'https://cdn.pixabay.com/photo/2023/04/30/10/05/philodendron-7960228_1280.jpg',
    tech: ['React', 'Redux Toolkit', 'Material UI'],
    link: 'https://anushka7x.github.io/Nursery/'
  },
  {
    title: 'Street Animal Care',
    description: 'Donation and request platform for street animal rescue and feeder support built with responsive UI.',
    image: 'https://themewagon.github.io/petsitting/images/image_2.jpg',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://anushka7x.github.io/pet-care/'
  }
];

const Projects = () => {
  return (
    <PageWrapper>
      <Box sx={{ position: 'relative' }}>
        <WaveOverlay position="top" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
            Projects
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ color: '#555', mb: 4 }}>
            Explore my featured projects showcasing frontend skills and real-world implementations.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, i) => (
              <Grid item xs={12} md={4} key={i}>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: 3,
                      border: '1px solid #e0e0e0',
                      backgroundColor: '#ffffff',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 20px rgba(173, 190, 255, 0.3)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                        Tech Stack:
                      </Typography>
                      <Box display="flex" flexWrap="wrap" gap={1}>
                        {project.tech.map((tech, j) => (
                          <Chip key={j} label={tech} size="small" variant="outlined" />
                        ))}
                      </Box>
                    </CardContent>
                    <Box textAlign="right" px={2} pb={2}>
                      <Button
                        variant="contained"
                        size="small"
                        href={project.link}
                        target="_blank"
                        sx={{ mt: 1 }}
                      >
                        View Project
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </PageWrapper>
  );
};

export default Projects;
