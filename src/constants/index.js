import { getRandomReviews } from './reviews';

export const TABS = {
  HOME: 'home',
  ABOUT: 'about', 
  CONTACT: 'contact'
};

export const CATEGORIES = [
  'All',
  'Table Decor', 
  'Wall Decor',
  'Gods & Goddesses',
];

export const formatPrice = (price) => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const PRODUCTS = [
  {
    id: 1000,
    name: 'Crystal Tortoise',
    price: 299,
    displayPrice: '₹299',
    image: '/WhatsApp Image 2025-01-21 at 9.59.57 PM.jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.59.57 PM.jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.57 PM.jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.57 PM.jpeg'
    ],
    description: 'Decorative tortoise figurine bringing good luck and longevity to your space',
    category: 'Table Decor',
    rating: 4.5,
    reviews: getRandomReviews(10),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '15 x 10 x 8 cm',
      weight: '450g',
      packaging: 'Premium Gift Box'
    },
    stock: 15,
    features: [
      'Hand-crafted design',
      'Premium crystal material',
      'Feng shui compliant',
      'Gift-ready packaging'
    ]
  },
  
  {
    id: 1002,
    name: 'Crystal Buddha Hand',
    price: 399,
    displayPrice: '₹399',
    image: '/WhatsApp Image 2025-01-21 at 9.59.56 PM (1).jpeg',
    images: [
    '/WhatsApp Image 2025-01-21 at 9.59.56 PM (1).jpeg',
    '/WhatsApp Image 2025-01-21 at 9.59.56 PM (1).jpeg',
    '/WhatsApp Image 2025-01-21 at 9.59.56 PM (1).jpeg'
    ],
    description: 'Sacred Buddha hand sculpture symbolizing blessings and protection',
    category: 'Table Decor',
    rating: 4.8,
    reviews: getRandomReviews(12),
    specifications: {
      material: 'Premium Crystal',
      dimensions: '20 x 12 x 10 cm',
      weight: '600g',
      packaging: 'Velvet-lined Box'
    },
    stock: 8,
    features: [
      'Intricate hand detailing',
      'Clear crystal finish',
      'Spiritual significance',
      'Perfect gift choice'
    ]
  },
  {
    id: 1003,
    name: 'Crystal Ganesha',
    price: 299,
    displayPrice: '₹299',
    image: '/WhatsApp Image 2025-01-21 at 9.59.20 PM (4).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (4).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (4).jpeg',
    ],
    description: 'Lord Ganesha idol representing wisdom and new beginnings',
    category: 'Wall Decor',
    rating: 4.9,
    reviews: getRandomReviews(15),
    specifications: {
      material: 'Pure Crystal',
      dimensions: '18 x 12 x 8 cm',
      weight: '500g',
      packaging: 'Premium Box with Cushioning'
    },
    stock: 20,
    features: [
      'Detailed craftsmanship',
      'Auspicious design',
      'Perfect for worship',
      'Elegant gift packaging'
    ]
  },
  {
    id: 1004,
    name: 'Crystal Ganesha Leaf',
    price: 349,
    displayPrice: '₹349',
    image: '/WhatsApp Image 2025-01-21 at 9.59.20 PM (3).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (3).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (3).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (3).jpeg'
    ],
    description: 'Artistic Ganesha mounted on a divine leaf design',
    category: 'Wall Decor',
    rating: 4.7,
    reviews: getRandomReviews(8),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '25 x 15 x 5 cm',
      weight: '400g',
      packaging: 'Premium Gift Box'
    },
    stock: 12,
    features: [
      'Unique leaf design',
      'Premium crystal quality',
      'Wall-mounting ready',
      'Elegant packaging'
    ]
  },
  {
    id: 1005,
    name: 'Crystal Dove',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (9).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (9).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (9).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (9).jpeg'
    ],
    description: 'Peaceful dove figurine symbolizing harmony and tranquility',
    category: 'Table Decor',
    rating: 4.6,
    reviews: getRandomReviews(9),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '18 x 12 x 8 cm',
      weight: '350g',
      packaging: 'Protective Box'
    },
    stock: 18,
    features: [
      'Detailed bird design',
      'Clear crystal finish',
      'Symbol of peace',
      'Gift-ready packaging'
    ]
  },
  {
    id: 1006,
    name: 'Crystal peacock',
    price: 699,
    displayPrice: '₹699',
    image: '/WhatsApp Image 2025-01-21 at 9.59.56 PM.jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.59.56 PM.jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.56 PM.jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.56 PM.jpeg'
    ],
    description: 'Majestic peacock sculpture with intricate detailing',
    category: 'Table Decor',
    rating: 4.8,
    reviews: getRandomReviews(14),
    specifications: {
      material: 'Premium Crystal',
      dimensions: '22 x 15 x 10 cm',
      weight: '550g',
      packaging: 'Luxury Gift Box'
    },
    stock: 10,
    features: [
      'Intricate feather details',
      'Premium crystal quality',
      'Stunning display piece',
      'Secure packaging'
    ]
  },
  {
    id: 1007,
    name: 'Crystal Horse',
    price: 399,
    displayPrice: '₹399',
    image: '/WhatsApp Image 2025-01-21 at 9.59.20 PM (2).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (2).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (2).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (2).jpeg'
    ],
    description: 'Dynamic horse figurine symbolizing success and power',
    category: 'Table Decor',
    rating: 4.5,
    reviews: getRandomReviews(11),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '20 x 15 x 8 cm',
      weight: '480g',
      packaging: 'Premium Box'
    },
    stock: 15,
    features: [
      'Dynamic pose',
      'Clear crystal finish',
      'Symbol of success',
      'Protected packaging'
    ]
  },
  {
    id: 1008,
    name: 'Crystal Horse black',
    price: 399,
    displayPrice: '₹399',
    image: '/WhatsApp Image 2025-01-21 at 9.59.20 PM (1).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (1).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (1).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.59.20 PM (1).jpeg'
    ],
    description: 'Elegant black horse sculpture representing strength and nobility',
    category: 'Table Decor',
    rating: 4.7,
    reviews: getRandomReviews(13),
    specifications: {
      material: 'Black Crystal Glass',
      dimensions: '20 x 15 x 8 cm',
      weight: '480g',
      packaging: 'Premium Box'
    },
    stock: 12,
    features: [
      'Black crystal finish',
      'Elegant design',
      'Symbol of strength',
      'Secure packaging'
    ]
  },

  {
    id: 1010,
    name: 'Crystal Dove Pair',
    price: 899,
    displayPrice: '₹899',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (8).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (8).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (8).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (8).jpeg'
    ],
    description: 'Romantic pair of doves symbolizing love and partnership',
    category: 'Table Decor',
    rating: 4.9,
    reviews: getRandomReviews(16),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '25 x 15 x 10 cm',
      weight: '600g',
      packaging: 'Luxury Gift Box'
    },
    stock: 8,
    features: [
      'Paired design',
      'Premium crystal quality',
      'Symbol of love',
      'Gift-ready packaging'
    ]
  },
  {
    id: 1011,
    name: 'Crystal Dove Pair',
    price: 899,
    displayPrice: '₹899',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (7).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (7).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (7).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (7).jpeg'
    ],
    description: 'Beautiful dove couple representing peace and harmony',
    category: 'Table Decor',
    rating: 4.8,
    reviews: getRandomReviews(12),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '25 x 15 x 10 cm',
      weight: '600g',
      packaging: 'Premium Gift Box'
    },
    stock: 10,
    features: [
      'Paired design',
      'High-quality crystal',
      'Symbol of harmony',
      'Elegant packaging'
    ]
  },
  {
    id: 1012,
    name: 'Crystal Owl',
    price: 349,
    displayPrice: '₹349',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (6).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (6).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (6).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (6).jpeg'
    ],
    description: 'Wise owl figurine bringing knowledge and protection',
    category: 'Wall Decor',
    rating: 4.6,
    reviews: getRandomReviews(9),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '15 x 12 x 8 cm',
      weight: '350g',
      packaging: 'Protective Box'
    },
    stock: 20,
    features: [
      'Detailed owl design',
      'Clear crystal finish',
      'Wall-mountable',
      'Secure packaging'
    ]
  },
  
  {
    id: 1014,
    name: 'Crystal Dear Gold',
    price: 699,
    displayPrice: '₹699',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (4).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (4).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (4).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (4).jpeg'
    ],
    description: 'Majestic golden deer sculpture symbolizing grace and nobility',
    category: 'Table Decor',
    rating: 4.7,
    reviews: getRandomReviews(15),
    specifications: {
      material: 'Gold-plated Crystal',
      dimensions: '20 x 15 x 10 cm',
      weight: '500g',
      packaging: 'Luxury Gift Box'
    },
    stock: 8,
    features: [
      'Gold-plated finish',
      'Premium crystal quality',
      'Elegant design',
      'Gift-ready packaging'
    ]
  },
  {
    id: 1015,
    name: 'Crystal Dear Pair',
    price: 899,
    displayPrice: '₹899',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (3).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (3).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (3).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (3).jpeg'
    ],
    description: 'Elegant pair of deer representing love and companionship',
    category: 'Table Decor',
    rating: 4.8,
    reviews: getRandomReviews(14),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '25 x 18 x 12 cm',
      weight: '750g',
      packaging: 'Premium Gift Box'
    },
    stock: 6,
    features: [
      'Paired design',
      'Premium crystal quality',
      'Symbol of companionship',
      'Luxury packaging'
    ]
  },
  {
    id: 1016,
    name: 'Crystal Dear White',
    price: 699,
    displayPrice: '₹699',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (2).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (2).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (2).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (2).jpeg'
    ],
    description: 'Pure white deer figurine symbolizing innocence and beauty',
    category: 'Table Decor',
    rating: 4.6,
    reviews: getRandomReviews(10),
    specifications: {
      material: 'White Crystal Glass',
      dimensions: '20 x 15 x 10 cm',
      weight: '500g',
      packaging: 'Premium Box'
    },
    stock: 15,
    features: [
      'Pure white finish',
      'Premium crystal quality',
      'Elegant design',
      'Protected packaging'
    ]
  },
  {
    id: 1017,
    name: 'Crystal Dear Pair Blue',
    price: 1099,
    displayPrice: '₹1,099',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (1).jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (1).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (1).jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM (1).jpeg'
    ],
    description: 'Stunning blue-tinted deer couple for enchanting decor',
    category: 'Table Decor',
    rating: 4.9,
    reviews: getRandomReviews(18),
    specifications: {
      material: 'Blue Crystal Glass',
      dimensions: '25 x 18 x 12 cm',
      weight: '750g',
      packaging: 'Luxury Gift Box'
    },
    stock: 5,
    features: [
      'Blue crystal finish',
      'Paired design',
      'Premium quality',
      'Elegant packaging'
    ]
  },
  {
    id: 1018,
    name: 'Crystal Dear Pair Blue',
    price: 1099,
    displayPrice: '₹1,099',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM.jpeg',
    images: [
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM.jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM.jpeg',
      '/WhatsApp Image 2025-01-21 at 9.58.46 PM.jpeg'
    ],
    description: 'Magnificent blue deer pair bringing serenity to your space',
    category: 'Table Decor',
    rating: 4.9,
    reviews: getRandomReviews(16),
    specifications: {
      material: 'Blue Crystal Glass',
      dimensions: '25 x 18 x 12 cm',
      weight: '750g',
      packaging: 'Luxury Gift Box'
    },
    stock: 5,
    features: [
      'Blue crystal finish',
      'Paired design',
      'Premium quality',
      'Gift-ready packaging'
    ]
  },
  {
    id: 1019,
    name: 'Crystal Owl Blue',
    price: 299,
    displayPrice: '₹299',
    image: '/WhatsApp Image 2025-01-25 at 7.50.21 PM (3).jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM (3).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM (3).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM (3).jpeg'
    ],
    description: 'Mystical blue owl symbolizing wisdom and intuition',
    category: 'Wall Decor',
    rating: 4.5,
    reviews: getRandomReviews(8),
    specifications: {
      material: 'Blue Crystal Glass',
      dimensions: '15 x 12 x 8 cm',
      weight: '350g',
      packaging: 'Protective Box'
    },
    stock: 25,
    features: [
      'Blue crystal finish',
      'Detailed owl design',
      'Wall-mountable',
      'Secure packaging'
    ]
  },
  {
    id: 1020,
    name: 'Crystal Owl Blue',
    price: 299,
    displayPrice: '₹299',
    image: '/WhatsApp Image 2025-01-25 at 7.50.21 PM (2).jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM (2).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM (2).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM (2).jpeg'
    ],
    description: 'Enchanting blue owl bringing wisdom to your decor',
    category: 'Table Decor',
    rating: 4.5,
    reviews: getRandomReviews(9),
    specifications: {
      material: 'Blue Crystal Glass',
      dimensions: '15 x 12 x 8 cm',
      weight: '350g',
      packaging: 'Protective Box'
    },
    stock: 20,
    features: [
      'Blue crystal finish',
      'Detailed design',
      'Table display piece',
      'Protected packaging'
    ]
  },
  {
    id: 1021,
    name: 'Crystal Peacock Gold',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-25 at 7.50.21 PM (1).jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM (1).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM (1).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM (1).jpeg'
    ],
    description: 'Regal golden peacock showcasing pride and beauty',
    category: 'Wall Decor',
    rating: 4.7,
    reviews: getRandomReviews(11),
    specifications: {
      material: 'Gold-plated Crystal',
      dimensions: '22 x 15 x 8 cm',
      weight: '450g',
      packaging: 'Premium Box'
    },
    stock: 12,
    features: [
      'Gold-plated finish',
      'Detailed feathers',
      'Wall-mountable',
      'Secure packaging'
    ]
  },
  {
    id: 1022,
    name: 'Crystal Peacock Gold',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-25 at 7.50.21 PM.jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM.jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM.jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.21 PM.jpeg'
    ],
    description: 'Majestic golden peacock radiating luxury and grace',
    category: 'Table Decor',
    rating: 4.7,
    reviews: getRandomReviews(13),
    specifications: {
      material: 'Gold-plated Crystal',
      dimensions: '22 x 15 x 8 cm',
      weight: '450g',
      packaging: 'Premium Box'
    },
    stock: 10,
    features: [
      'Gold-plated finish',
      'Intricate details',
      'Table display piece',
      'Protected packaging'
    ]
  },
  {
    id: 1023,
    name: 'Crystal Budda Bottle',
    price: 199,
    displayPrice: '₹199',
    image: '/WhatsApp Image 2025-01-25 at 7.50.20 PM (1).jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.20 PM (1).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.20 PM (1).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.20 PM (1).jpeg'
    ],
    description: 'Serene Buddha-themed decorative bottle for spiritual ambiance',
    category: 'Table Decor',
    rating: 4.4,
    reviews: getRandomReviews(7),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '12 x 8 x 8 cm',
      weight: '250g',
      packaging: 'Protective Box'
    },
    stock: 30,
    features: [
      'Buddha design',
      'Clear crystal finish',
      'Decorative bottle',
      'Secure packaging'
    ]
  },
  {
    id: 1024,
    name: 'Crystal Hanging Plant',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-25 at 7.50.20 PM.jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.20 PM.jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.20 PM.jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.20 PM.jpeg'
    ],
    description: 'Elegant hanging botanical design for natural aesthetics',
    category: 'Wall Decor',
    rating: 4.6,
    reviews: getRandomReviews(10),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '30 x 15 x 5 cm',
      weight: '400g',
      packaging: 'Premium Box'
    },
    stock: 15,
    features: [
      'Botanical design',
      'Wall-mounting ready',
      'Crystal clear finish',
      'Protected packaging'
    ]
  },
  {
    id: 1025,
    name: 'Crystal Hanging Plant',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-25 at 7.50.19 PM (2).jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.19 PM (2).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.19 PM (2).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.19 PM (2).jpeg'
    ],
    description: 'Beautiful suspended plant design for nature-inspired decor',
    category: 'Table Decor',
    rating: 4.6,
    reviews: getRandomReviews(9),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '30 x 15 x 5 cm',
      weight: '400g',
      packaging: 'Premium Box'
    },
    stock: 18,
    features: [
      'Nature-inspired design',
      'Table display piece',
      'Crystal clear finish',
      'Secure packaging'
    ]
  },
  {
    id: 1026,
    name: 'Crystal Hanging Flower',
    price: 699,
    displayPrice: '₹699',
    image: '/WhatsApp Image 2025-01-25 at 7.50.19 PM (1).jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.19 PM (1).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.19 PM (1).jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.19 PM (1).jpeg'
    ],
    description: 'Delicate hanging floral arrangement for ethereal beauty',
    category: 'Table Decor',
    rating: 4.8,
    reviews: getRandomReviews(12),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '25 x 15 x 5 cm',
      weight: '350g',
      packaging: 'Premium Gift Box'
    },
    stock: 10,
    features: [
      'Floral design',
      'Premium crystal quality',
      'Hanging display',
      'Gift-ready packaging'
    ]
  },
  {
    id: 1027,
    name: 'Crystal Hanging Tree',
    price: 1099,
    displayPrice: '₹1,099',
    image: '/WhatsApp Image 2025-01-25 at 7.50.19 PM.jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.19 PM.jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.19 PM.jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.19 PM.jpeg'
    ],
    description: 'Mystical hanging tree design symbolizing growth and life',
    category: 'Wall Decor',
    rating: 4.9,
    reviews: getRandomReviews(15),
    specifications: {
      material: 'Crystal Glass',
      dimensions: '35 x 20 x 5 cm',
      weight: '600g',
      packaging: 'Luxury Gift Box'
    },
    stock: 8,
    features: [
      'Tree of life design',
      'Wall-mounting ready',
      'Premium crystal quality',
      'Protected packaging'
    ]
  },
  {
    id: 1028,
    name: 'Crystal Epoxy Lamp',
    price: 999,
    displayPrice: '₹999',
    image: '/WhatsApp Image 2025-01-25 at 7.50.18 PM.jpeg',
    images: [
      '/WhatsApp Image 2025-01-25 at 7.50.18 PM.jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.18 PM.jpeg',
      '/WhatsApp Image 2025-01-25 at 7.50.18 PM.jpeg'
    ],
    description: 'Modern epoxy-finish decorative lamp for ambient lighting',
    category: 'Table Decor',
    rating: 4.7,
    reviews: getRandomReviews(14),
    specifications: {
      material: 'Crystal Glass with Epoxy',
      dimensions: '20 x 20 x 25 cm',
      weight: '800g',
      packaging: 'Premium Gift Box'
    },
    stock: 12,
    features: [
      'Epoxy finish',
      'LED lighting',
      'Modern design',
      'Gift-ready packaging'
    ]
  }
]; 