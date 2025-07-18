import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { 
  Typography, 
  Box, 
  Avatar, 
  Card,
  CardContent,
  LinearProgress,
  Chip,
  TextField,
  Button,
  Snackbar,
  Alert,

} from '@mui/material';
import config from '../config/config';
import { 
  StarOutline as StarIcon,
  CalendarToday as CalendarIcon,
  ShoppingBag as ShoppingBagIcon,
  Loyalty as LoyaltyIcon,
  Edit as EditIcon,
  Save as SaveIcon
} from '@mui/icons-material';
import { useTheme as useMuiTheme } from '@mui/material/styles';


interface UserMetadata {
  address?: string;
  phone?: string;
  birthdate?: string;
  preferences?: {
    notifications?: boolean;
    newsletter?: boolean;
  };
}

const ProfileStat: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: 1.5,
    p: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 2,
  }}>
    <Box sx={{ color: 'primary.main' }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="subtitle1" fontWeight="medium">
        {value}
      </Typography>
    </Box>
  </Box>
);

const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const muiTheme = useMuiTheme();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const [userMetadata, setUserMetadata] = useState<UserMetadata>({
    address: '',
    phone: '',
    birthdate: '',
    preferences: {
      notifications: true,
      newsletter: true
    }
  });

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const mgmtDomain = config.auth0.mgmtDomain;
        //const userDetailsByIdUrl = `https://${mgmtDomain}/api/v2/users/${user?.sub}`;
        const userDetailsByIdUrl = `https://${mgmtDomain}/userinfo`;

        console.log('Fetching metadata from:', userDetailsByIdUrl);
        console.log('User sub:', user?.sub);
        console.log('Management domain:', mgmtDomain);

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            //
            access_token: `${accessToken}`
          }
        });

        console.log('Response status:', metadataResponse.status);
        console.log('Response headers:', Object.fromEntries(metadataResponse.headers.entries()));

        if (!metadataResponse.ok) {
          const errorText = await metadataResponse.text();
          console.log('Error response:', errorText);
          throw new Error(`HTTP error! status: ${metadataResponse.status}`);
        }

        const responseData = await metadataResponse.json();
        console.log('Full response data:', responseData);
        
        const { user_metadata } = responseData;
        console.log('User metadata:', user_metadata);
        
        if (user_metadata) {
          setUserMetadata(user_metadata);
        } else {
          console.log('No user_metadata found in response');
        }
      } catch (error) {
        console.error('Error fetching user metadata:', error);
        // Fallback to empty metadata if API call fails
        setUserMetadata({
          address: '',
          phone: '',
          birthdate: '',
          preferences: {
            notifications: true,
            newsletter: true
          }
        });
      }
    };

    if (user?.sub) {
      getUserMetadata();
    }
  }, [getAccessTokenSilently, user?.sub]);

  const handleSaveMetadata = async () => {
    setIsSaving(true);
    try {
      const accessToken = await getAccessTokenSilently();
      const mgmtDomain = config.auth0.mgmtDomain;
      const userDetailsByIdUrl = `https://${mgmtDomain}/api/v2/users/${user?.sub}`;

      const response = await fetch(userDetailsByIdUrl, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_metadata: userMetadata })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSnackbar({
        open: true,
        message: 'Profile updated successfully!',
        severity: 'success'
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user metadata:', error);
      setSnackbar({
        open: true,
        message: 'Failed to update profile. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ width: '100%', mt: 4 }}>
        <LinearProgress />
      </Box>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh' 
      }}>
        <Typography variant="h6" color="text.secondary">
          Please log in to view your profile.
        </Typography>
      </Box>
    );
  }

  // Mock data - in a real app, this would come from your backend
  const membershipData = {
    points: 1250,
    status: 'Gold Member',
    memberSince: 'January 2024',
    lastPurchase: 'March 15, 2024',
    progress: 75, // percentage to next tier
    pointsToNext: 250
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Profile Header */}
        <Card sx={{ 
          position: 'relative',
          overflow: 'visible',
          background: `linear-gradient(45deg, ${muiTheme.palette.primary.main}, ${muiTheme.palette.secondary.main})`,
          color: 'white',
          p: 2
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 3,
            position: 'relative',
            zIndex: 1
          }}>
            <Avatar
              src={user.picture}
              alt={user.name}
              sx={{ 
                width: 120, 
                height: 120,
                border: '4px solid white',
                boxShadow: 2
              }}
            />
            <Box sx={{ 
              flex: 1,
              textAlign: { xs: 'center', sm: 'left' }
            }}>
              <Typography variant="h4" gutterBottom fontWeight="bold">
                {user.name}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                {user.email}
              </Typography>
              <Chip 
                label={membershipData.status}
                sx={{ 
                  mt: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  '& .MuiChip-label': {
                    fontWeight: 'medium'
                  }
                }}
              />
            </Box>
          </Box>
        </Card>

        {/* Stats Grid */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)'
          },
          gap: 2
        }}>
          <ProfileStat
            icon={<LoyaltyIcon />}
            label="Reward Points"
            value={membershipData.points.toLocaleString()}
          />
          <ProfileStat
            icon={<StarIcon />}
            label="Member Status"
            value={membershipData.status}
          />
          <ProfileStat
            icon={<CalendarIcon />}
            label="Member Since"
            value={membershipData.memberSince}
          />
          <ProfileStat
            icon={<ShoppingBagIcon />}
            label="Last Purchase"
            value={membershipData.lastPurchase}
          />
        </Box>

        {/* Membership Progress */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Progress to Next Tier
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Current: {membershipData.status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {membershipData.pointsToNext} points to next tier
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={membershipData.progress}
                sx={{ 
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 4
                  }
                }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">
                Profile Details
              </Typography>
              <Button
                startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
                variant={isEditing ? "contained" : "outlined"}
                onClick={isEditing ? handleSaveMetadata : () => setIsEditing(true)}
                disabled={isSaving}
              >
                {isEditing ? (isSaving ? 'Saving...' : 'Save Changes') : 'Edit Profile'}
              </Button>
            </Box>
            
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3 
            }}>
              <TextField
                fullWidth
                label="Address"
                value={userMetadata.address || ''}
                onChange={(e) => setUserMetadata(prev => ({ ...prev, address: e.target.value }))}
                disabled={!isEditing}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Phone Number"
                value={userMetadata.phone || ''}
                onChange={(e) => setUserMetadata(prev => ({ ...prev, phone: e.target.value }))}
                disabled={!isEditing}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Birth Date"
                type="date"
                value={userMetadata.birthdate || ''}
                onChange={(e) => setUserMetadata(prev => ({ ...prev, birthdate: e.target.value }))}
                disabled={!isEditing}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert 
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Profile; 