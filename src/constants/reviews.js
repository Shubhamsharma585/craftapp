export const REVIEW_POOL = [
  {
    id: 'r1',
    user: 'Priya Sharma',
    avatar: '/avatars/female-1.jpg',
    rating: 5,
    date: '2024-02-01',
    comment: "Absolutely stunning piece! The craftsmanship is exceptional, and it has brought such positive energy to my home. Perfect for my pooja room, and the crystal quality is outstanding. Packaging was also very secure and gift-worthy.",
    helpful: 24
  },
  {
    id: 'r2',
    user: 'Rajesh Patel',
    avatar: '/avatars/male-1.jpg',
    rating: 4,
    date: '2024-01-28',
    comment: "Very impressed with the quality and finish. Bought this for my mother's birthday and she absolutely loved it. The only reason for 4 stars is that it's slightly smaller than what I expected, but the beauty makes up for it.",
    helpful: 18
  },
  {
    id: 'r3',
    user: 'Ananya Desai',
    avatar: '/avatars/female-2.jpg',
    rating: 5,
    date: '2024-01-25',
    comment: "This is my third purchase from this store and I'm never disappointed! The crystal catches light beautifully and creates amazing patterns in my living room. Great value for money and quick delivery as always.",
    helpful: 32
  },
  {
    id: 'r4',
    user: 'Vikram Malhotra',
    avatar: '/avatars/male-2.jpg',
    rating: 5,
    date: '2024-01-22',
    comment: "Superb quality and excellent vastu-compliant piece. The energy it brings to my office desk is remarkable. Customer service was also very helpful in explaining the product details. Highly recommend!",
    helpful: 15
  },
  {
    id: 'r5',
    user: 'Meera Iyer',
    avatar: '/avatars/female-3.jpg',
    rating: 4,
    date: '2024-01-20',
    comment: "Beautiful addition to my home decor. The crystal clarity is amazing and it looks much more expensive than it actually is. Delivery was fast and the product was well-packaged.",
    helpful: 21
  },
  {
    id: 'r6',
    user: 'Arjun Reddy',
    avatar: '/avatars/male-3.jpg',
    rating: 5,
    date: '2024-01-18',
    comment: "Gifted this to my wife on our anniversary and she was overjoyed! The crystal piece has such fine detailing and the way it reflects light is mesmerizing. Worth every rupee spent.",
    helpful: 28
  },
  {
    id: 'r7',
    user: 'Kavita Krishnan',
    avatar: '/avatars/female-4.jpg',
    rating: 5,
    date: '2024-01-15',
    comment: "Perfect piece for my showcase! The quality is top-notch and it has become a conversation starter whenever guests visit. Love how it combines traditional elements with modern design.",
    helpful: 19
  },
  {
    id: 'r8',
    user: 'Amit Shah',
    avatar: '/avatars/male-4.jpg',
    rating: 4,
    date: '2024-01-12',
    comment: "Really happy with this purchase. The crystal work is intricate and the piece feels premium. Just wish it came with a display stand, but otherwise no complaints!",
    helpful: 23
  },
  {
    id: 'r9',
    user: 'Deepika Mehta',
    avatar: '/avatars/female-5.jpg',
    rating: 5,
    date: '2024-01-10',
    comment: "Such a beautiful piece of art! It's not just decorative but also brings positive vibes to the space. The packaging was excellent and the product exactly matches the photos. Will definitely buy more!",
    helpful: 31
  },
  {
    id: 'r10',
    user: 'Karthik Subramaniam',
    avatar: '/avatars/male-5.jpg',
    rating: 5,
    date: '2024-01-08',
    comment: "Outstanding craftsmanship! Being particular about feng shui, I found this piece perfect for my study. The crystal quality is excellent and the design is very elegant. Great attention to detail.",
    helpful: 27
  },
  {
    id: 'r11',
    user: 'Neha Gupta',
    avatar: '/avatars/female-6.jpg',
    rating: 4,
    date: '2024-01-05',
    comment: "Lovely addition to my collection of crystal items. The transparency and cuts are perfect. Shipping was quick and the item was packaged very securely. Would definitely recommend to others.",
    helpful: 16
  },
  {
    id: 'r12',
    user: 'Siddharth Kapoor',
    avatar: '/avatars/male-6.jpg',
    rating: 5,
    date: '2024-01-02',
    comment: "Exceeded my expectations! The crystal piece has amazing clarity and the design is very sophisticated. It's become the centerpiece of my display cabinet. Excellent value for money.",
    helpful: 29
  },
  {
    id: 'r13',
    user: 'Ritu Singhania',
    avatar: '/avatars/female-7.jpg',
    rating: 5,
    date: '2024-01-01',
    comment: "Simply beautiful! The way it catches and reflects light is magical. I've already received so many compliments from family and friends. The quality is exceptional for the price point.",
    helpful: 22
  },
  {
    id: 'r14',
    user: 'Arun Kumar',
    avatar: '/avatars/male-7.jpg',
    rating: 4,
    date: '2023-12-30',
    comment: "Very satisfied with my purchase. The crystal piece is well-crafted and looks elegant. Perfect for both modern and traditional home decor. Just a bit delicate, so handle with care.",
    helpful: 25
  },
  {
    id: 'r15',
    user: 'Lakshmi Menon',
    avatar: '/avatars/female-8.jpg',
    rating: 5,
    date: '2023-12-28',
    comment: "Absolutely in love with this piece! It's not just beautiful but also feels very premium. The packaging was excellent and delivery was prompt. Will definitely shop more from this store.",
    helpful: 30
  }
];

// Helper function to get random reviews for a product
export const getRandomReviews = (count = 8) => {
  const shuffled = [...REVIEW_POOL].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((review, index) => ({
    ...review,
    id: `${review.id}-${index}`, // Ensure unique IDs when reusing reviews
    date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // Random recent date
  }));
}; 