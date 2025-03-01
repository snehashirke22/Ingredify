import React from 'react'
import Hero from '../components/Hero';
import MarqueeTape from '../components/marqueetape';
import Categories from '../components/Categories';
import PopularRecipes from '../components/PopularRecipes';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
    
  return (
   <div className='app'>
      <Hero />
      <MarqueeTape />
      <Categories />
      <PopularRecipes />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home