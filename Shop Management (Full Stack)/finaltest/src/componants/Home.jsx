import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // 100% of the viewport height
        background: 'linear-gradient(to bottom right, #2196F3, #BBDEFB)', // Gradient background
        color: '#fff', // Text color
        textAlign: 'center',
        padding: 4,
        borderRadius: 8,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow
        backdropFilter: 'blur(4px)', // Background blur effect
      }}
    >
      <Container>
        <Typography variant="h1" sx={{ color: 'inherit' }}>
          Welcome In Shopping Site
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;
