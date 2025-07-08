import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  CardMedia,
  Rating
} from '@mui/material';
import { useTheme } from '../themes/ThemeContext';

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  features: string[];
}

interface Park extends Location {
  image: string;
}

interface Hotel extends Location {
  image: string;
  rating: number;
  price: string;
  description: string;
}

const isPark = (location: Location | Park | Hotel): location is Park => {
  return 'image' in location && !('rating' in location);
};

const isHotel = (location: Location | Park | Hotel): location is Hotel => {
  return 'rating' in location;
};

const stores: Location[] = [
  {
    id: 1,
    name: 'Downtown Store',
    address: '123 Main Street, Downtown, City 12345',
    phone: '(555) 123-4567',
    hours: 'Mon-Sat: 9AM-9PM, Sun: 10AM-6PM',
    features: ['Parking Available', 'Curbside Pickup', 'In-store Events']
  },
  {
    id: 2,
    name: 'Westside Mall',
    address: '456 West Avenue, Westside Mall, City 12346',
    phone: '(555) 234-5678',
    hours: 'Mon-Sun: 10AM-9PM',
    features: ['Mall Location', 'Gift Wrapping', 'Personal Shopping']
  },
  {
    id: 3,
    name: 'Eastside Plaza',
    address: '789 East Boulevard, City 12347',
    phone: '(555) 345-6789',
    hours: 'Mon-Sat: 9AM-8PM, Sun: 11AM-6PM',
    features: ['Free Parking', 'Returns Center', 'Tech Support']
  },
  {
    id: 4,
    name: 'North Center',
    address: '321 North Road, City 12348',
    phone: '(555) 456-7890',
    hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM',
    features: ['Rewards Center', 'Coffee Shop', 'Electronics Repair']
  }
];

const parks: Park[] = [
  {
    id: 1,
    name: 'Magic Kingdom',
    image: 'https://picsum.photos/seed/magic-kingdom/800/400',
    address: '1234 Fantasy Lane, Adventure World',
    phone: '(555) 111-2222',
    hours: 'Daily: 9AM-10PM',
    features: ['Thrill Rides', 'Character Meet & Greet', 'Fireworks Show', 'FastPass Available']
  },
  {
    id: 2,
    name: 'Adventure Island',
    image: 'https://picsum.photos/seed/adventure-island/800/400',
    address: '5678 Explorer Road, Adventure World',
    phone: '(555) 222-3333',
    hours: 'Daily: 10AM-8PM',
    features: ['Water Rides', 'Wave Pool', 'Private Cabanas', 'Dining Packages']
  },
  {
    id: 3,
    name: 'Future World',
    image: 'https://picsum.photos/seed/future-world/800/400',
    address: '9012 Innovation Drive, Adventure World',
    phone: '(555) 333-4444',
    hours: 'Daily: 9AM-9PM',
    features: ['Interactive Exhibits', 'Virtual Reality', '4D Experiences', 'Science Shows']
  },
  {
    id: 4,
    name: 'Wild Safari Park',
    image: 'https://picsum.photos/seed/safari-park/800/400',
    address: '3456 Wildlife Way, Adventure World',
    phone: '(555) 444-5555',
    hours: 'Daily: 8AM-7PM',
    features: ['Animal Encounters', 'Safari Tours', 'Conservation Programs', 'Kids Activities']
  }
];

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'LuxStay Grand Hotel & Spa',
    image: 'https://picsum.photos/seed/grand-hotel/800/400',
    address: '1 Luxury Avenue, Downtown, City 12345',
    phone: '(555) 777-8888',
    hours: 'Open 24/7',
    rating: 4.8,
    price: 'From $299/night',
    description: 'Experience ultimate luxury in our flagship property featuring world-class amenities and spectacular city views.',
    features: ['Spa & Wellness Center', '5-Star Restaurant', 'Rooftop Pool', 'Executive Lounge', 'Butler Service']
  },
  {
    id: 2,
    name: 'LuxStay Beach Resort',
    image: 'https://picsum.photos/seed/beach-resort/800/400',
    address: '789 Oceanfront Drive, Coastal City 45678',
    phone: '(555) 666-9999',
    hours: 'Open 24/7',
    rating: 4.9,
    price: 'From $399/night',
    description: 'Escape to paradise in our beachfront resort offering private beaches and luxury oceanview accommodations.',
    features: ['Private Beach', 'Infinity Pools', 'Water Sports', 'Beachfront Dining', 'Kids Club']
  },
  {
    id: 3,
    name: 'LuxStay Mountain Lodge',
    image: 'https://picsum.photos/seed/mountain-lodge/800/400',
    address: '234 Alpine Way, Mountain View 78901',
    phone: '(555) 444-3333',
    hours: 'Open 24/7',
    rating: 4.7,
    price: 'From $349/night',
    description: 'Discover serenity in our mountain retreat featuring stunning views and outdoor adventures.',
    features: ['Ski-in/Ski-out', 'Hot Springs', 'Mountain Tours', 'Gourmet Restaurant', 'Fireplace Suites']
  },
  {
    id: 4,
    name: 'LuxStay Business Tower',
    image: 'https://picsum.photos/seed/business-tower/800/400',
    address: '567 Corporate Plaza, Business District 34567',
    phone: '(555) 222-1111',
    hours: 'Open 24/7',
    rating: 4.6,
    price: 'From $259/night',
    description: 'Perfect for business travelers, offering modern amenities and convenient downtown location.',
    features: ['Business Center', 'Conference Rooms', 'Airport Shuttle', 'Executive Suites', '24/7 Room Service']
  }
];

const Stores: React.FC = () => {
  const { currentTheme } = useTheme();
  const isThemePark = currentTheme.type === 'themePark';
  const isHospitality = currentTheme.type === 'hospitality';
  const locations = isThemePark ? parks : isHospitality ? hotels : stores;

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        {isThemePark ? 'Our Theme Parks' : isHospitality ? 'Our Luxury Properties' : 'Find a Store'}
      </Typography>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(2, 1fr)'
        },
        gap: 4
      }}>
        {locations.map((location) => (
          <Card key={location.id} sx={{ display: 'flex', flexDirection: 'column' }}>
            {(isThemePark && isPark(location) || isHospitality && isHotel(location)) && (
              <CardMedia
                component="img"
                height="250"
                image={location.image}
                alt={location.name}
                sx={{ objectFit: 'cover' }}
              />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {location.name}
              </Typography>
              {isHotel(location) && (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={location.rating} precision={0.1} readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({location.rating})
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {location.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {location.description}
                  </Typography>
                </>
              )}
              <Typography color="text.secondary" paragraph>
                {location.address}
              </Typography>
              <Typography color="text.secondary" paragraph>
                Phone: {location.phone}
              </Typography>
              <Typography color="text.secondary" paragraph>
                Hours: {location.hours}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {location.features.map((feature, index) => (
                  <Chip
                    key={index}
                    label={feature}
                    color="primary"
                    variant={isThemePark || isHospitality ? "filled" : "outlined"}
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
            </CardContent>
            <CardActions sx={{ mt: 'auto', p: 2 }}>
              <Button size="small" color="primary">
                Get Directions
              </Button>
              <Button size="small" color="primary">
                {isThemePark ? 'Park Details' : isHospitality ? 'View Rooms' : 'Store Details'}
              </Button>
              {isThemePark && (
                <Button size="small" color="primary">
                  Buy Tickets
                </Button>
              )}
              {isHospitality && (
                <Button size="small" color="primary" variant="contained">
                  Book Now
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Stores; 