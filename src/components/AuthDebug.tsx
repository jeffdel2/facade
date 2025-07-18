import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Box, Typography, Paper, Button } from '@mui/material';

const AuthDebug: React.FC = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [sessionInfo, setSessionInfo] = useState<any>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const isAuthenticated = await oktaAuth.isAuthenticated();
        const user = await oktaAuth.getUser();
        setSessionInfo({
          isAuthenticated,
          user,
          authState: authState
        });
      } catch (error) {
        console.error('Session check error:', error);
        setSessionInfo({ error: error instanceof Error ? error.message : 'Unknown error' });
      }
    };

    checkSession();
  }, [oktaAuth, authState]);

  const handleSilentAuth = async () => {
    try {
      await oktaAuth.signInWithCredentials({
        username: 'test@example.com',
        password: 'test'
      });
    } catch (error) {
      console.log('Silent auth not possible:', error);
    }
  };

  return (
    <Paper sx={{ p: 2, m: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" gutterBottom>
        SSO Debug Info
      </Typography>
      <Box sx={{ fontFamily: 'monospace', fontSize: '0.875rem', mb: 2 }}>
        <div>Auth State - Is Authenticated: {authState?.isAuthenticated ? 'Yes' : 'No'}</div>
        <div>Auth State - Is Pending: {authState?.isPending ? 'Yes' : 'No'}</div>
        <div>Session Check - Is Authenticated: {sessionInfo?.isAuthenticated ? 'Yes' : 'No'}</div>
        <div>User: {sessionInfo?.user ? JSON.stringify(sessionInfo.user, null, 2) : 'No user'}</div>
        <div>Access Token: {authState?.accessToken ? 'Present' : 'Not Present'}</div>
        <div>ID Token: {authState?.idToken ? 'Present' : 'Not Present'}</div>
      </Box>
      
      <Box sx={{ mt: 2 }}>
        <Button 
          variant="outlined" 
          size="small" 
          onClick={handleSilentAuth}
          sx={{ mr: 1 }}
        >
          Test Silent Auth
        </Button>
        <Button 
          variant="outlined" 
          size="small" 
          onClick={() => oktaAuth.signInWithRedirect()}
        >
          Force Login
        </Button>
      </Box>
    </Paper>
  );
};

export default AuthDebug; 