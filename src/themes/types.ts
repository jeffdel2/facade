import { PaletteOptions } from '@mui/material';

export type ThemeType = 'retail' | 'themePark' | 'telecom' | 'hospitality' | 'medical';

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  pointsEarned: number;
}

export interface BrandingConfig {
  name: string;
  tagline: string;
  loyaltyProgram: {
    name: string;
    description: string;
  };
  features: {
    title: string;
    description: string;
    image: string;
  }[];
  palette: PaletteOptions;
  products: Product[];
}

export interface ThemeConfig {
  type: ThemeType;
  branding: BrandingConfig;
} 