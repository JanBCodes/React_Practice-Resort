import React from 'react'

import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from '../components/Hero'
import ResortContainer from '../components/ResortContainer'

const HomePage = () => {
    return (
        <>
        <div className="grid grid-row-3" id="main-container">
          <Header/>
          <main>
            <Hero/>
            <ResortContainer/>
          </main>
          <Footer/>
        </div>
      </>
    )
}

export default HomePage
