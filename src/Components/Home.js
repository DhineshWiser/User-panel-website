import React from 'react'
import Navbarr from './Navbarr'
import Banner from './Banner'
import Products from './Products'
import Footer from './Footer'


function Home() {
  return (
    <div className="App">
        <Navbarr />
        <Banner />
        <Products />
        <Footer />
      
      
    </div>
  )
}

export default Home