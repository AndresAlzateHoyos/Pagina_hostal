import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home'
import Footer from '../Footer/Footer';
import TheHostel from '../theHostel/TheHostel';
import About from '../about/About';
import Reservations from '../reservations/Reservations';
import Events from '../events/events';
import GettingHere from '../gettingHere/GettingHere';
import Contact from '../contact/Contact';
import Blog from '../blog/Blog';

function App() {

  return (
    <div className={styles.app}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/the-hostel' element={<TheHostel />} />
        <Route path='/about' element={<About />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/events' element={<Events />} />
        <Route path='/getting-here' element={<GettingHere />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
