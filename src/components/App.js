// Root Component
// Creating a Component 

import React from 'react'

import Footer from './Footer'
import Header from "./Header"
import Hero from './Hero'
import ResortContainer from './ResortContainer'

import "../assets/css/App.css";
import "../assets/css/utilities.css";



const App = () => {
  return (
    <>
      <div class="grid grid-row-3" id="main-container">
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

export default App;
