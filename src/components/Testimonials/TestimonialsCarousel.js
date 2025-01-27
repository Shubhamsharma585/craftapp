import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialsCarousel.css';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    rating: 5,
    review: 'The crystal pieces from Crystal Craft have transformed my clients\' homes into elegant spaces. The fusion of traditional and modern designs is absolutely perfect for Indian homes.',
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    role: 'Corporate Gift Consultant',
    avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
    rating: 5,
    review: 'Our company relies on Crystal Craft for all corporate Diwali gifts. The crystal items add a touch of luxury that our business partners truly appreciate.',
  },
  {
    id: 3,
    name: 'Anjali Mehta',
    role: 'Home Decor Enthusiast',
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    rating: 5,
    review: 'I discovered Crystal Craft while decorating my new home. Their pieces blend perfectly with both modern and traditional Indian decor. Simply outstanding!',
  },
  {
    id: 4,
    name: 'Vikram Malhotra',
    role: 'Business Owner',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    review: 'The crystal awards we ordered for our annual employee recognition ceremony were exquisite. They perfectly represented the prestige we wanted to convey.',
  },
  {
    id: 5,
    name: 'Meera Kapoor',
    role: 'Wedding Planner',
    avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
    rating: 5,
    review: 'Crystal Craft\'s pieces make perfect wedding gifts. My clients love their collection for wedding registries and special occasion gifting. Truly remarkable quality!',
  }
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <span key={index} className="star">★</span>
    ));
  };

  return (
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-carousel">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="avatar"
                  />
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <p className="role">{testimonial.role}</p>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="review">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsCarousel; 