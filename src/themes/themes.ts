import { ThemeType, ThemeConfig } from './types';

export const retailTheme: ThemeConfig = {
  type: 'retail',
  branding: {
    name: 'RetailRewards',
    tagline: 'Shop smarter, earn rewards, enjoy benefits',
    loyaltyProgram: {
      name: 'RetailRewards Program',
      description: 'Earn points on every purchase and unlock exclusive rewards'
    },
    features: [
      {
        title: 'Earn Points',
        description: 'Earn points on every purchase and redeem them for exclusive rewards and discounts.',
        image: 'https://picsum.photos/seed/retail-rewards/400/300'
      },
      {
        title: 'Shop Products',
        description: 'Browse our wide selection of quality products at competitive prices.',
        image: 'https://picsum.photos/seed/retail-products/400/300'
      },
      {
        title: 'Find Stores',
        description: 'Locate our stores near you and enjoy in-person shopping experiences.',
        image: 'https://picsum.photos/seed/retail-stores/400/300'
      }
    ],
    palette: {
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0'
      },
      secondary: {
        main: '#dc004e',
        light: '#ff4081',
        dark: '#c51162'
      }
    },
    products: [
      {
        id: 1,
        name: 'Premium Coffee Maker',
        price: 129.99,
        rating: 4.5,
        image: 'https://picsum.photos/seed/coffee-maker/400/300',
        category: 'Appliances',
        pointsEarned: 260
      },
      {
        id: 2,
        name: 'Wireless Earbuds',
        price: 89.99,
        rating: 4.8,
        image: 'https://picsum.photos/seed/earbuds/400/300',
        category: 'Electronics',
        pointsEarned: 180
      },
      {
        id: 3,
        name: 'Smart Watch',
        price: 199.99,
        rating: 4.6,
        image: 'https://picsum.photos/seed/smartwatch/400/300',
        category: 'Electronics',
        pointsEarned: 400
      },
      {
        id: 4,
        name: 'Yoga Mat',
        price: 29.99,
        rating: 4.3,
        image: 'https://picsum.photos/seed/yoga-mat/400/300',
        category: 'Fitness',
        pointsEarned: 60
      },
      {
        id: 5,
        name: 'Blender',
        price: 79.99,
        rating: 4.4,
        image: 'https://picsum.photos/seed/blender/400/300',
        category: 'Appliances',
        pointsEarned: 160
      },
      {
        id: 6,
        name: 'Backpack',
        price: 49.99,
        rating: 4.7,
        image: 'https://picsum.photos/seed/backpack/400/300',
        category: 'Accessories',
        pointsEarned: 100
      }
    ]
  }
};

export const themeParkTheme: ThemeConfig = {
  type: 'themePark',
  branding: {
    name: 'MagicMoments',
    tagline: 'Where memories come to life',
    loyaltyProgram: {
      name: 'Adventure Pass',
      description: 'Turn every visit into magical rewards and exclusive experiences'
    },
    features: [
      {
        title: 'Earn Magic Points',
        description: 'Collect points on rides, shows, and purchases throughout the park.',
        image: 'https://picsum.photos/seed/theme-rides/400/300'
      },
      {
        title: 'Special Events',
        description: 'Get priority access to seasonal events and exclusive shows.',
        image: 'https://picsum.photos/seed/theme-events/400/300'
      },
      {
        title: 'Park Benefits',
        description: 'Enjoy fast-pass privileges and special member-only areas.',
        image: 'https://picsum.photos/seed/theme-benefits/400/300'
      }
    ],
    palette: {
      primary: {
        main: '#7b1fa2',
        light: '#9c27b0',
        dark: '#6a1b9a'
      },
      secondary: {
        main: '#ff6d00',
        light: '#ff9100',
        dark: '#ff5722'
      }
    },
    products: [
      {
        id: 1,
        name: 'Fast Pass Plus',
        price: 99.99,
        rating: 4.8,
        image: 'https://picsum.photos/seed/fastpass/400/300',
        category: 'Passes',
        pointsEarned: 200
      },
      {
        id: 2,
        name: 'VIP Park Tour',
        price: 299.99,
        rating: 4.9,
        image: 'https://picsum.photos/seed/viptour/400/300',
        category: 'Experiences',
        pointsEarned: 600
      },
      {
        id: 3,
        name: 'Character Dining Experience',
        price: 79.99,
        rating: 4.7,
        image: 'https://picsum.photos/seed/dining/400/300',
        category: 'Dining',
        pointsEarned: 160
      },
      {
        id: 4,
        name: 'Photo Pass Package',
        price: 149.99,
        rating: 4.6,
        image: 'https://picsum.photos/seed/photos/400/300',
        category: 'Memories',
        pointsEarned: 300
      },
      {
        id: 5,
        name: 'Exclusive Merchandise Pack',
        price: 89.99,
        rating: 4.5,
        image: 'https://picsum.photos/seed/merch/400/300',
        category: 'Merchandise',
        pointsEarned: 180
      },
      {
        id: 6,
        name: 'Special Event Ticket',
        price: 129.99,
        rating: 4.8,
        image: 'https://picsum.photos/seed/event/400/300',
        category: 'Events',
        pointsEarned: 260
      }
    ]
  }
};

export const telecomTheme: ThemeConfig = {
  type: 'telecom',
  branding: {
    name: 'ConnectPlus',
    tagline: 'Stay connected, get rewarded',
    loyaltyProgram: {
      name: 'ConnectRewards',
      description: 'Earn points on your monthly bills and device purchases'
    },
    features: [
      {
        title: 'Bill Rewards',
        description: 'Earn points automatically with every monthly payment.',
        image: 'https://picsum.photos/seed/telecom-billing/400/300'
      },
      {
        title: 'Device Upgrades',
        description: 'Get early access to new devices and special upgrade offers.',
        image: 'https://picsum.photos/seed/telecom-devices/400/300'
      },
      {
        title: 'Premium Support',
        description: 'Enjoy priority customer service and tech support.',
        image: 'https://picsum.photos/seed/telecom-support/400/300'
      }
    ],
    palette: {
      primary: {
        main: '#00796b',
        light: '#009688',
        dark: '#00695c'
      },
      secondary: {
        main: '#ffd600',
        light: '#ffea00',
        dark: '#ffc400'
      }
    },
    products: [
      {
        id: 1,
        name: '5G Unlimited Plan',
        price: 79.99,
        rating: 4.7,
        image: 'https://picsum.photos/seed/5gplan/400/300',
        category: 'Plans',
        pointsEarned: 160
      },
      {
        id: 2,
        name: 'Latest Smartphone',
        price: 999.99,
        rating: 4.8,
        image: 'https://picsum.photos/seed/smartphone/400/300',
        category: 'Devices',
        pointsEarned: 2000
      },
      {
        id: 3,
        name: 'Premium Tablet',
        price: 599.99,
        rating: 4.6,
        image: 'https://picsum.photos/seed/tablet/400/300',
        category: 'Devices',
        pointsEarned: 1200
      },
      {
        id: 4,
        name: 'Family Plan Bundle',
        price: 149.99,
        rating: 4.9,
        image: 'https://picsum.photos/seed/family/400/300',
        category: 'Plans',
        pointsEarned: 300
      },
      {
        id: 5,
        name: 'Smart Home Hub',
        price: 199.99,
        rating: 4.5,
        image: 'https://picsum.photos/seed/smarthome/400/300',
        category: 'Accessories',
        pointsEarned: 400
      },
      {
        id: 6,
        name: 'Premium Wireless Earbuds',
        price: 249.99,
        rating: 4.7,
        image: 'https://picsum.photos/seed/premiumbuds/400/300',
        category: 'Accessories',
        pointsEarned: 500
      }
    ]
  }
};

export const hospitalityTheme: ThemeConfig = {
  type: 'hospitality',
  branding: {
    name: 'LuxStay Rewards',
    tagline: 'Experience luxury, earn exclusive privileges',
    loyaltyProgram: {
      name: 'Elite Guest Program',
      description: 'Earn points on stays and unlock premium experiences across our luxury properties'
    },
    features: [
      {
        title: 'Elite Benefits',
        description: 'Enjoy room upgrades, late checkout, and exclusive access to our premium amenities.',
        image: 'https://picsum.photos/seed/hotel-benefits/400/300'
      },
      {
        title: 'Dining Rewards',
        description: 'Earn and redeem points at our award-winning restaurants and bars.',
        image: 'https://picsum.photos/seed/hotel-dining/400/300'
      },
      {
        title: 'Spa & Wellness',
        description: 'Access premium spa services and wellness programs with member privileges.',
        image: 'https://picsum.photos/seed/hotel-spa/400/300'
      }
    ],
    palette: {
      primary: {
        main: '#8b4513',
        light: '#a0522d',
        dark: '#6b3410'
      },
      secondary: {
        main: '#c5a880',
        light: '#d4c4a8',
        dark: '#9e815c'
      }
    },
    products: [
      {
        id: 1,
        name: 'Luxury Suite Package',
        price: 499.99,
        rating: 4.9,
        image: 'https://picsum.photos/seed/luxury-suite/400/300',
        category: 'Accommodations',
        pointsEarned: 1000
      },
      {
        id: 2,
        name: 'Spa Day Retreat',
        price: 299.99,
        rating: 4.8,
        image: 'https://picsum.photos/seed/spa-retreat/400/300',
        category: 'Wellness',
        pointsEarned: 600
      },
      {
        id: 3,
        name: 'Fine Dining Experience',
        price: 199.99,
        rating: 4.7,
        image: 'https://picsum.photos/seed/fine-dining/400/300',
        category: 'Dining',
        pointsEarned: 400
      },
      {
        id: 4,
        name: 'Airport Transfer Service',
        price: 89.99,
        rating: 4.6,
        image: 'https://picsum.photos/seed/transfer/400/300',
        category: 'Transportation',
        pointsEarned: 180
      },
      {
        id: 5,
        name: 'Weekend Getaway Package',
        price: 799.99,
        rating: 4.8,
        image: 'https://picsum.photos/seed/getaway/400/300',
        category: 'Packages',
        pointsEarned: 1600
      },
      {
        id: 6,
        name: 'Executive Lounge Access',
        price: 149.99,
        rating: 4.7,
        image: 'https://picsum.photos/seed/lounge/400/300',
        category: 'Amenities',
        pointsEarned: 300
      }
    ]
  }
};

export const medicalTheme: ThemeConfig = {
  type: 'medical',
  branding: {
    name: 'MedSupply Pro',
    tagline: 'Advanced equipment for healthcare excellence',
    loyaltyProgram: {
      name: 'Healthcare Partner Program',
      description: 'Earn rewards on medical equipment and supplies while supporting patient care'
    },
    features: [
      {
        title: 'Equipment Financing',
        description: 'Flexible financing options for hospitals, clinics, and healthcare providers.',
        image: 'https://picsum.photos/seed/medical-financing/400/300'
      },
      {
        title: 'Technical Support',
        description: '24/7 technical support and training for all medical equipment.',
        image: 'https://picsum.photos/seed/medical-support/400/300'
      },
      {
        title: 'Maintenance Services',
        description: 'Comprehensive maintenance and calibration services to ensure equipment reliability.',
        image: 'https://picsum.photos/seed/medical-maintenance/400/300'
      }
    ],
    palette: {
      primary: {
        main: '#2e7d32',
        light: '#4caf50',
        dark: '#1b5e20'
      },
      secondary: {
        main: '#0277bd',
        light: '#0288d1',
        dark: '#01579b'
      }
    },
    products: [
      {
        id: 1,
        name: 'Digital X-Ray System',
        price: 125000.00,
        rating: 4.8,
        image: 'https://picsum.photos/seed/xray-system/400/300',
        category: 'Imaging',
        pointsEarned: 25000
      },
      {
        id: 2,
        name: 'Patient Monitor',
        price: 8500.00,
        rating: 4.7,
        image: 'https://picsum.photos/seed/patient-monitor/400/300',
        category: 'Monitoring',
        pointsEarned: 1700
      },
      {
        id: 3,
        name: 'Surgical Instruments Set',
        price: 2500.00,
        rating: 4.9,
        image: 'https://picsum.photos/seed/surgical-instruments/400/300',
        category: 'Surgical',
        pointsEarned: 500
      },
      {
        id: 4,
        name: 'Ultrasound Machine',
        price: 45000.00,
        rating: 4.6,
        image: 'https://picsum.photos/seed/ultrasound/400/300',
        category: 'Imaging',
        pointsEarned: 9000
      },
      {
        id: 5,
        name: 'Infusion Pump',
        price: 3200.00,
        rating: 4.8,
        image: 'https://picsum.photos/seed/infusion-pump/400/300',
        category: 'Therapy',
        pointsEarned: 640
      },
      {
        id: 6,
        name: 'Medical Cart System',
        price: 1800.00,
        rating: 4.5,
        image: 'https://picsum.photos/seed/medical-cart/400/300',
        category: 'Storage',
        pointsEarned: 360
      }
    ]
  }
};

export const themes: Record<ThemeType, ThemeConfig> = {
  retail: retailTheme,
  themePark: themeParkTheme,
  telecom: telecomTheme,
  hospitality: hospitalityTheme,
  medical: medicalTheme
}; 