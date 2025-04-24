import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Typography, Box, Paper, Stack, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WaveOverlay from '../components/WaveOverlay';

const experiences = [
  {
    title: 'Frontend Developer @ Expleo Info Systems',
    duration: 'Aug 2023 – Present',
    description: 'Developed enterprise applications using Neutrinos Studio and React.',
    tools: ['React', 'Redux', 'Neutrinos Studio', 'API Integration']
  },
  {
    title: 'Intern @ Web N Soft',
    duration: 'Jan 2023 – Apr 2023',
    description: 'Built dynamic portals and responsive web forms using PHP and JavaScript.',
    tools: ['PHP', 'HTML', 'CSS', 'JavaScript']
  }
];

const Experience = () => {
  return (
    <PageWrapper>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <Typography variant="h4" align="center" fontWeight={700} gutterBottom color="#333">
            My Experience
          </Typography>
          <Typography align="center" color="#777" sx={{ mb: 4 }}>
            Work and internship highlights over the years
          </Typography>

          <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto', px: 2 }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    borderLeft: '5px solidrgb(45, 141, 251)',
                    backgroundColor: '#fff',
                    position: 'relative'
                  }}
                >
                  <Box display="flex" alignItems="center" mb={1}>
                    <WorkOutlineIcon sx={{ color: '#fbc02d', mr: 1 }} />
                    <Typography variant="h6" fontWeight={600} color="#333">
                      {exp.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="#999" gutterBottom>
                    {exp.duration}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {exp.description}
                  </Typography>

                  <Divider sx={{ mb: 1 }} />
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {exp.tools.map((tool, j) => (
                      <Chip key={j} label={tool} variant="outlined" color="primary" size="small" />
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      
    </PageWrapper>
  );
};

export default Experience;
