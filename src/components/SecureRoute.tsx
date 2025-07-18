import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

interface SecureRouteProps {
  children: React.ReactNode;
}

const SecureRoute: React.FC<SecureRouteProps> = ({ children }) => {
  const { authState, oktaAuth } = useOktaAuth();

  useEffect(() => {
    // Check for existing session on component mount
    if (!authState?.isAuthenticated && !authState?.isPending) {
      console.log('SecureRoute: Checking for existing session...');
      oktaAuth.isAuthenticated().then((isAuthenticated: boolean) => {
        console.log('SecureRoute: Session check result:', isAuthenticated);
        if (!isAuthenticated) {
          console.log('SecureRoute: No session found, redirecting to login');
          oktaAuth.signInWithRedirect({ originalUri: window.location.pathname });
        } else {
          console.log('SecureRoute: Session found, user should be authenticated');
        }
              }).catch((error: unknown) => {
          console.error('SecureRoute: Session check error:', error);
          oktaAuth.signInWithRedirect({ originalUri: window.location.pathname });
        });
    }
  }, [authState, oktaAuth]);

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