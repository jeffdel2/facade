import React from 'react';
import { Button, Box, Typography, ButtonBase } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { useTheme } from '../../themes/ThemeContext';

const NavButton: React.FC<{
  to: string;
  children: React.ReactNode;
}> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <ButtonBase
      component={RouterLink}
      to={to}
      sx={{
        px: 2,
        py: 1,
        borderRadius: 1,
        color: 'text.primary',
        position: 'relative',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: isActive ? '100%' : '0%',
          height: '2px',
          backgroundColor: 'primary.main',
          transition: 'all 0.3s ease-in-out',
          transform: 'translateX(-50%)'
        }
      }}
    >
      {children}
    </ButtonBase>
  );
};

const Navigation: React.FC = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const { currentTheme } = useTheme();
  
  const isAuthenticated = authState?.isAuthenticated || false;
  const user = authState?.idToken?.claims;

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: { xs: 0.5, sm: 1 }
    }}>
      <NavButton to="/products">
        {currentTheme.type === 'hospitality' ? 'Services' : 
         currentTheme.type === 'themePark' ? 'Experiences' : 
         'Products'}
      </NavButton>
      <NavButton to="/stores">
        {currentTheme.type === 'themePark' ? 'Find Parks' : 
         currentTheme.type === 'hospitality' ? 'Find Properties' : 
         'Find Stores'}
      </NavButton>
      
      {!isAuthenticated ? (
        <>
          <NavButton to="/rewards">Rewards Program</NavButton>
          <Button 
            variant="contained"
            size="small"
            onClick={() => oktaAuth.signInWithRedirect({ originalUri: window.location.origin })}
            sx={{ 
              ml: 1,
              borderRadius: 2,
              textTransform: 'none',
              px: 2,
              backgroundColor: (theme) => theme.palette.primary.main,
              '&:hover': {
                backgroundColor: (theme) => theme.palette.primary.dark,
              }
            }}
          >
            Login
          </Button>
        </>
      ) : (
        <>
          <NavButton to="/profile">My Profile</NavButton>
          <NavButton to="/rewards">My Rewards</NavButton>
          <Typography 
            variant="body2" 
            sx={{ 
              mx: 2,
              px: 2,
              py: 0.5,
              borderRadius: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              color: 'text.secondary'
            }}
          >
            {typeof user?.name === 'string' ? user.name : typeof user?.email === 'string' ? user.email : 'User'}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => oktaAuth.signOut()}
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              borderColor: 'divider',
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                borderColor: 'primary.main',
                color: 'primary.main'
              }
            }}
          >
            Logout
          </Button>
        </>
      )}
    </Box>
  );
};

export default Navigation; 