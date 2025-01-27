import React from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/Products/ProductGrid'
import FeaturedProducts from './components/FeaturedProduct/FeaturedCarousel'
import Testimonials from './components/Testimonials/TestimonialsCarousel'

function Home() {
  return (
    <div>
        <Hero />
        <FeaturedProducts />
        <ProductGrid />
        <Testimonials />
    </div>
  )
}

export default Home