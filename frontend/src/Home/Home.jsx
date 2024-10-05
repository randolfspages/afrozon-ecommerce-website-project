import React from 'react'
import SubBanner from './SubBanner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import Blogs from '../blogs/Blogs'

const Home = () => {
  return (
        <div className=''>
          <SubBanner />
          <Categories />
          <HeroSection />
          <TrendingProducts />
          <DealsSection />
          <PromoBanner />
          <Blogs />
        </div>    
  )
   
  
}

export default Home