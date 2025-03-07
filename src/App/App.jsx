import React, { useState } from 'react';
import styles from './App.module.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home'
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className={styles.app}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
