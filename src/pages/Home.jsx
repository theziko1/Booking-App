import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Featured from '../components/Featured'
import PropertyList from '../components/PropertyList'
import FeaturedProperties from '../components/FeaturedProperties'

const Home = () => {
  return (
    < >
      <Navbar/>
      <Header/>
      <div className="mt-12 flex flex-col items-center gap-7">
         <Featured/>
         <h1 className="text-xl font-bold w-[1024px] ">Lorem ipsum dolor sit ame elit.</h1>
         <PropertyList/>
         <h1 className="text-xl font-bold w-[1024px] ">Lorem ipsum dolor sit ame elit.</h1>
         <FeaturedProperties/>
      </div>
    </>
  )
}

export default Home