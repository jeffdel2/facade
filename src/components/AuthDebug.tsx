import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Box, Typography, Paper } from '@mui/material';

const AuthDebug: React.FC = () => {
  const { authState } = useOktaAuth();

  return (
    <Paper sx={{ p: 2, m: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" gutterBottom>
        Authentication Debug Info
      </Typography>
      <Box sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
        <div>Is Authenticated: {authState?.isAuthenticated ? 'Yes' : 'No'}</div>
        <div>Is Pending: {authState?.isPending ? 'Yes' : 'No'}</div>
        <div>User: {JSON.stringify(authState?.idToken?.claims, null, 2)}</div>
        <div>Access Token: {authState?.accessToken ? 'Present' : 'Not Present'}</div>
      </Box>
    </Paper>
  );
};

export default AuthDebug; 