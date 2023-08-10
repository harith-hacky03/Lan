import React from 'react'
import './App.css'
import Landing_page from './Components/Landing_page'
import About from './Components/About'
import Provide from './Components/Provide'
import Review from './Components/Review'
import Last from './Components/Last'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <div>
        <Landing_page/>
        <About/>
        <Provide/>
        <Review/>
        <Last/>
        <Footer/>
      </div>
    </div>
  )
} 

export default App