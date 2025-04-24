import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 3, backgroundColor: '#f5f5f5', mt: 5 }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Anushka Dubey. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
