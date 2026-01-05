import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// import Features from './pages/Features.jsx'
import Coin from './pages/Coin.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/about.jsx'
import Track from './pages/track.jsx'


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinID" element={<Coin />} />
        <Route path="/about" element={<About />} />
        <Route path="/track" element={<Track />} />
  
      </Routes>
      <Footer />
    </div>
  )
}

export default App
