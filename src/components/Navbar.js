import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button } from '@mui/material';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', gap: 3 }}>
        {links.map((link, idx) => (
          <Button
            key={idx}
            component={Link}
            to={link.path}
            sx={{
              color: pathname === link.path ? '#2E2E2E' : '#555',
              fontWeight: 600,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: pathname === link.path ? '100%' : '0%',
                height: '2px',
                bottom: 0,
                left: 0,
                backgroundColor: '#A3BFFA',
                transition: 'width 0.3s ease'
              },
              '&:hover::after': {
                width: '100%'
              }
            }}
          >
            {link.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
