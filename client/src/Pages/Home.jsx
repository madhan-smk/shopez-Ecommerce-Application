import React from 'react'
import Hero from '../components/HomeComp/Hero/Hero'
import Popular from "../components/HomeComp/popular/Popular"
import Offers from '../components/HomeComp/Offers/Offers'
import NewCollections from '../components/HomeComp/NewCollections/NewCollections'
import NewsLetter from '../components/HomeComp/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>

    </div>
  )
}

export default Home
