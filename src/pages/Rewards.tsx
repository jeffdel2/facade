import React from 'react';
import { Typography, Box, Card, CardContent, CardActions, Button } from '@mui/material';
import { useOktaAuth } from '@okta/okta-react';

const rewardTiers = [
  {
    title: 'Bronze',
    points: '0-500',
    benefits: [
      '1 point per $1 spent',
      'Birthday reward',
      'Monthly newsletter'
    ]
  },
  {
    title: 'Silver',
    points: '501-1000',
    benefits: [
      '1.5 points per $1 spent',
      'Birthday reward',
      'Quarterly bonus rewards',
      'Early access to sales'
    ]
  },
  {
    title: 'Gold',
    points: '1001+',
    benefits: [
      '2 points per $1 spent',
      'Birthday reward',
      'Monthly bonus rewards',
      'VIP events access',
      'Free shipping'
    ]
  }
];

const Rewards: React.FC = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const isAuthenticated = authState?.isAuthenticated || false;

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          RetailRewards Program
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Join our rewards program and start earning points on every purchase!
        </Typography>
        {!isAuthenticated && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => oktaAuth.signInWithRedirect({ originalUri: window.location.origin })}
            sx={{ mt: 2 }}
          >
            Join Now
          </Button>
        )}
      </Box>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 4,
        maxWidth: 1200,
        mx: 'auto'
      }}>
        {rewardTiers.map((tier) => (
          <Card key={tier.title} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                {tier.title}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {tier.points} points
              </Typography>
              <Box sx={{ mt: 2 }}>
                {tier.benefits.map((benefit, index) => (
                  <Typography key={index} paragraph>
                    • {benefit}
                  </Typography>
                ))}
              </Box>
            </CardContent>
            <CardActions>
              <Button size="large" color="primary" fullWidth>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Rewards; 