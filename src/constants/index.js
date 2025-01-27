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
    description: 'Decorative tortoise figurine bringing good luck and longevity to your space',
    category: 'Table Decor'
  },
  
  {
    id: 1002,
    name: 'Crystal Budda Hand',
    price: 399,
    displayPrice: '₹399',
    image: '/WhatsApp Image 2025-01-21 at 9.59.56 PM (1).jpeg',
    description: 'Sacred Buddha hand sculpture symbolizing blessings and protection',
    category: 'Table Decor'
  },
  {
    id: 1003,
    name: 'Crystal Ganesha',
    price: 299,
    displayPrice: '₹299',
    image: '/WhatsApp Image 2025-01-21 at 9.59.20 PM (4).jpeg',
    description: 'Lord Ganesha idol representing wisdom and new beginnings',
    category: 'Wall Decor'
  },
  {
    id: 1004,
    name: 'Crystal Ganesha Leaf',
    price: 349,
    displayPrice: '₹349',
    image: '/WhatsApp Image 2025-01-21 at 9.59.20 PM (3).jpeg',
    description: 'Artistic Ganesha mounted on a divine leaf design',
    category: 'Wall Decor'
  },
  {
    id: 1005,
    name: 'Crystal Dove',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (9).jpeg',
    description: 'Peaceful dove figurine symbolizing harmony and tranquility',
    category: 'Table Decor'
  },
  {
    id: 1006,
    name: 'Crystal peacock',
    price: 699,
    displayPrice: '₹699',
    image: '/WhatsApp Image 2025-01-21 at 9.59.56 PM.jpeg',
    description: 'Majestic peacock sculpture with intricate detailing',
    category: 'Table Decor'
  },
  {
    id: 1007,
    name: 'Crystal Horse',
    price: 399,
    displayPrice: '₹399',
    image: '/WhatsApp Image 2025-01-21 at 9.59.20 PM (2).jpeg',
    description: 'Dynamic horse figurine symbolizing success and power',
    category: 'Table Decor'
  },
  {
    id: 1008,
    name: 'Crystal Horse black',
    price: 399,
    displayPrice: '₹399',
    image: '/WhatsApp Image 2025-01-21 at 9.59.20 PM (1).jpeg',
    description: 'Elegant black horse sculpture representing strength and nobility',
    category: 'Table Decor'
  },

  {
    id: 1010,
    name: 'Crystal Dove Pair',
    price: 899,
    displayPrice: '₹899',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (8).jpeg',
    description: 'Romantic pair of doves symbolizing love and partnership',
    category: 'Table Decor'
  },
  {
    id: 1011,
    name: 'Crystal Dove Pair',
    price: 899,
    displayPrice: '₹899',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (7).jpeg',
    description: 'Beautiful dove couple representing peace and harmony',
    category: 'Table Decor'
  },
  {
    id: 1012,
    name: 'Crystal Owl',
    price: 349,
    displayPrice: '₹349',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (6).jpeg',
    description: 'Wise owl figurine bringing knowledge and protection',
    category: 'Wall Decor'
  },
  
  {
    id: 1014,
    name: 'Crystal Dear Gold',
    price: 699,
    displayPrice: '₹699',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (4).jpeg',
    description: 'Majestic golden deer sculpture symbolizing grace and nobility',
    category: 'Table Decor'
  },
  {
    id: 1015,
    name: 'Crystal Dear Pair',
    price: 899,
    displayPrice: '₹899',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (3).jpeg',
    description: 'Elegant pair of deer representing love and companionship',
    category: 'Table Decor'
  },
  {
    id: 1016,
    name: 'Crystal Dear White',
    price: 699,
    displayPrice: '₹699',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (2).jpeg',
    description: 'Pure white deer figurine symbolizing innocence and beauty',
    category: 'Table Decor'
  },
  {
    id: 1017,
    name: 'Crystal Dear Pair Blue',
    price: 1099,
    displayPrice: '₹1,099',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM (1).jpeg',
    description: 'Stunning blue-tinted deer couple for enchanting decor',
    category: 'Table Decor'
    },
  {
    id: 1018,
    name: 'Crystal Dear Pair Blue',
    price: 1099,
    displayPrice: '₹1,099',
    image: '/WhatsApp Image 2025-01-21 at 9.58.46 PM.jpeg',
    description: 'Magnificent blue deer pair bringing serenity to your space',
    category: 'Table Decor'
  },
  {
    id: 1019,
    name: 'Crystal Owl Blue',
    price: 299,
    displayPrice: '₹299',
    image: '/WhatsApp Image 2025-01-25 at 7.50.21 PM (3).jpeg',
    description: 'Mystical blue owl symbolizing wisdom and intuition',
    category: 'Wall Decor'
  },
  {
    id: 1020,
    name: 'Crystal Owl Blue',
    price: 299,
    displayPrice: '₹299',
    image: '/WhatsApp Image 2025-01-25 at 7.50.21 PM (2).jpeg',
    description: 'Enchanting blue owl bringing wisdom to your decor',
    category: 'Table Decor'
  },
  {
    id: 1021,
    name: 'Crystal Peacock Gold',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-25 at 7.50.21 PM (1).jpeg',
    description: 'Regal golden peacock showcasing pride and beauty',
    category: 'Wall Decor'
  },
  {
    id: 1022,
    name: 'Crystal Peacock Gold',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-25 at 7.50.21 PM.jpeg',
    description: 'Majestic golden peacock radiating luxury and grace',
    category: 'Table Decor'
  },
  {
    id: 1023,
    name: 'Crystal Budda Bottle',
    price: 199,
    displayPrice: '₹199',
    image: '/WhatsApp Image 2025-01-25 at 7.50.20 PM (1).jpeg',
    description: 'Serene Buddha-themed decorative bottle for spiritual ambiance',
    category: 'Table Decor'
  },
  {
    id: 1024,
    name: 'Crystal Hanging Plant',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-25 at 7.50.20 PM.jpeg',
    description: 'Elegant hanging botanical design for natural aesthetics',
    category: 'Wall Decor'
  },
  {
    id: 1025,
    name: 'Crystal Hanging Plant',
    price: 499,
    displayPrice: '₹499',
    image: '/WhatsApp Image 2025-01-25 at 7.50.19 PM (2).jpeg',
    description: 'Beautiful suspended plant design for nature-inspired decor',
    category: 'Table Decor'
  },
  {
    id: 1026,
    name: 'Crystal Hanging Flower',
    price: 699,
    displayPrice: '₹699',
    image: '/WhatsApp Image 2025-01-25 at 7.50.19 PM (1).jpeg',
    description: 'Delicate hanging floral arrangement for ethereal beauty',
    category: 'Table Decor'
  },
  {
    id: 1027,
    name: 'Crystal Hanging Tree',
    price: 1099,
    displayPrice: '₹1,099',
    image: '/WhatsApp Image 2025-01-25 at 7.50.19 PM.jpeg',
    description: 'Mystical hanging tree design symbolizing growth and life',
    category: 'Wall Decor'
  },
  {
    id: 1028,
    name: 'Crystal Epoxy Lamp',
    price: 999,
    displayPrice: '₹999',
    image: '/WhatsApp Image 2025-01-25 at 7.50.18 PM.jpeg',
    description: 'Modern epoxy-finish decorative lamp for ambient lighting',
    category: 'Table Decor'
  }
]; 