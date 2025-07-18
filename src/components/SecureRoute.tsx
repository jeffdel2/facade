import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

interface SecureRouteProps {
  children: React.ReactNode;
}

const SecureRoute: React.FC<SecureRouteProps> = ({ children }) => {
  const { authState } = useOktaAuth();

  if (authState?.isPending) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!authState?.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default SecureRoute; 