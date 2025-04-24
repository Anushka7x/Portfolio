import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Typography, TextField, Button, Stack, IconButton, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import WaveOverlay from '../components/WaveOverlay';

const Contact = () => {
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
          <Typography variant="h4" align="center" gutterBottom>
            Contact Me
          </Typography>

          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Feel free to reach out for collaborations or inquiries.
          </Typography>

          <Stack direction="row" justifyContent="center" spacing={2} mb={4}>
            <IconButton href="mailto:anushka@example.com" color="primary">
              <EmailIcon />
            </IconButton>
            <IconButton href="https://github.com/anushka" target="_blank" color="primary">
              <GitHubIcon />
            </IconButton>
          </Stack>

          <Box component="form" sx={{ maxWidth: 500, mx: 'auto' }}>
            <Stack spacing={2}>
              <TextField fullWidth label="Your Name" required />
              <TextField fullWidth label="Your Email" type="email" required />
              <TextField fullWidth label="Message" multiline rows={4} required />
              <Button variant="contained" disabled>Send Message (Coming Soon)</Button>
            </Stack>
          </Box>
        </motion.div>
      </Box>
    </PageWrapper>
  );
};

export default Contact;
