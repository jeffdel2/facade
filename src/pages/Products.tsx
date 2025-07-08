import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Rating,
  Chip
} from '@mui/material';
import { useTheme } from '../themes/ThemeContext';

const Products: React.FC = () => {
  const { currentTheme } = useTheme();
  const products = currentTheme.branding.products;

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        Our Products
      </Typography>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 4
      }}>
        {products.map((product) => (
          <Card key={product.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                ${product.price}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={product.rating} precision={0.1} readOnly />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  ({product.rating})
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <Chip label={product.category} color="primary" variant="outlined" />
                <Typography variant="body2" color="success.main">
                  Earn {product.pointsEarned} points
                </Typography>
              </Box>
            </CardContent>
            <Box sx={{ p: 2 }}>
              <Button variant="contained" color="primary" fullWidth>
                Add to Cart
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Products; 