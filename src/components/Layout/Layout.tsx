import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Container, useScrollTrigger } from '@mui/material';
import Navigation from '../Layout/Navigation';
import ThemeSelector from '../ThemeSelector';
import { useTheme } from '../../themes/ThemeContext';

const Layout: React.FC = () => {
  const { currentTheme } = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="sticky" 
        color="inherit"
        sx={{
          backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid',
          borderColor: trigger ? 'transparent' : '#e0e0e0',
          transition: 'all 0.3s ease-in-out',
          boxShadow: trigger ? '0px 2px 4px -1px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ 
            minHeight: { xs: '56px', sm: '64px' }, 
            px: { xs: 1, sm: 2 },
            gap: 2,
            justifyContent: 'space-between'
          }}>
            <Link 
              to="/" 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="h6" 
                component="div"
                sx={{ 
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {currentTheme.branding.name}
              </Typography>
            </Link>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 1
            }}>
              <Navigation />
              <Box sx={{ ml: 1 }}>
                <ThemeSelector />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout; 