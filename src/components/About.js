import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "1000+", label: "Products Delivered" },
    { number: "50+", label: "Cities Covered" },
    { number: "24/7", label: "Customer Support" }
  ];

  const teamMembers = [
    {
      name: "Rajeshwari Sharma",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Riya Kapoor",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Rani Sharma",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section className="about-section">
      <div className="about-header">
        <h2>Crafting Dreams Into Reality</h2>
        <p>Transforming spaces with unique, handcrafted decor pieces since 2015</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Our Story</h3>
          <p>Founded with a passion for artistry and innovation, we've grown from a small workshop to a nationwide brand. Our journey is marked by dedication to quality, sustainability, and customer satisfaction.</p>
        </div>

        <div className="about-card">
          <h3>Our Mission</h3>
          <p>To create exceptional decorative pieces that transform spaces and bring joy to our customers, while supporting local artisans and sustainable practices in our craft.</p>
        </div>

        <div className="about-card">
          <h3>Our Promise</h3>
          <p>We guarantee premium quality, timely delivery, and personalized service. Each piece is crafted with attention to detail and comes with our satisfaction guarantee.</p>
        </div>
      </div>

      <div className="about-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h4>{stat.number}</h4>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="team-section">
        <h3>Meet Our Creative Team</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-card" style={{ maxWidth: '800px', margin: '4rem auto' }}>
        <h3>Why Choose Us?</h3>
        <p>We specialize in creating bespoke decorative items that reflect your unique style and personality. From custom home decor to corporate gifting solutions, our team of skilled artisans brings creativity and precision to every project. With nationwide delivery and competitive pricing, we make luxury accessible to all.</p>
      </div>
    </section>
  );
};

export default About; 