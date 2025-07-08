import React from 'react';
import { 
  Typography, 
  Button, 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Container,
  Paper,
  useTheme as useMuiTheme
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useTheme } from '../themes/ThemeContext';

const getWelcomeMessage = (themeType: string, userName: string) => {
  switch (themeType) {
    case 'retail':
      return `Welcome back to your shopping journey, ${userName}!`;
    case 'themePark':
      return `Welcome back to the magic, ${userName}!`;
    case 'telecom':
      return `Stay connected, ${userName}!`;
    default:
      return `Welcome back, ${userName}!`;
  }
};

const Home: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { currentTheme } = useTheme();
  const muiTheme = useMuiTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Paper 
        elevation={0}
        sx={{
          position: 'relative',
          backgroundColor: 'transparent',
          color: 'white',
          mb: 8,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://picsum.photos/seed/${currentTheme.type}-hero/1920/600)`,
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          borderRadius: 4,
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              textAlign: 'center',
              maxWidth: 'md',
              mx: 'auto',
              p: { xs: 3, md: 6 },
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
              sx={{
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                mb: 4
              }}
            >
              {currentTheme.branding.name}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              sx={{
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                opacity: 0.9
              }}
            >
              {currentTheme.branding.tagline}
            </Typography>
            {!isAuthenticated ? (
              <Button
                variant="contained"
                size="large"
                onClick={() => loginWithRedirect({
                  authorizationParams: {
                    screen_hint: 'signup'
                  }
                })}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  textTransform: 'none',
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  }
                }}
              >
                Start Your Journey
              </Button>
            ) : (
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 500,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  opacity: 0.95
                }}
              >
                {getWelcomeMessage(currentTheme.type, user?.name || 'valued member')}
              </Typography>
            )}
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${muiTheme.palette.primary.main}, ${muiTheme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Exclusive Benefits
        </Typography>
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              md: 'repeat(3, 1fr)' 
            }, 
            gap: 4 
          }}
        >
          {currentTheme.branding.features.map((feature, index) => (
            <Card 
              key={index} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={feature.image}
                alt={feature.title}
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="h3"
                  sx={{ 
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Loyalty Program Section */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.02)',
          borderRadius: 4,
          py: 8,
          px: 3,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 3
            }}
          >
            {currentTheme.branding.loyaltyProgram.name}
          </Typography>
          <Typography 
            variant="h6" 
            paragraph
            color="text.secondary"
            sx={{
              maxWidth: 'sm',
              mx: 'auto',
              lineHeight: 1.8
            }}
          >
            {currentTheme.branding.loyaltyProgram.description}
          </Typography>
          {!isAuthenticated && (
            <Button
              variant="outlined"
              size="large"
              onClick={() => loginWithRedirect()}
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                borderRadius: 3,
                borderWidth: 2,
                textTransform: 'none',
                fontSize: '1.1rem'
              }}
            >
              Join the Program
            </Button>
          )}
        </Container>
      </Paper>
    </Box>
  );
};

export default Home; 