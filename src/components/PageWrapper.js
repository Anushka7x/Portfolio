import React from 'react';
import { Box } from '@mui/material';

const PageWrapper = ({ children, bg = '#f3f4ff' }) => {
  return (
    <Box
      sx={{
        px: 3,
        py: 8,
        background: bg,
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
