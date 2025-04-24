import React, { useState } from "react";
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav className={styles.nav}>
        <NavLink to='/' className={styles.logo}>
          <img src={`${import.meta.env.BASE_URL}/images/Logo/logo_redondo_beige.png`} alt='Logo del hostal' />
        </NavLink>

        <ul className={styles.navBarDesktop}>
          <li><NavLink to='/' className={styles.link}>Home</NavLink></li>
          <li><NavLink to='/the-hostel' className={styles.link}>The Hostel</NavLink></li>
          <li><NavLink to='/our-story' className={styles.link}>Our Story</NavLink></li>
          <li><NavLink to='/reservations' className={styles.link}>Reservations</NavLink></li>
          <li><NavLink to='/events' className={styles.link}>Events</NavLink></li>
          <li><NavLink to='/getting-here' className={styles.link}>Getting Here</NavLink></li>
          <li><NavLink to='/contact' className={styles.link}>Contact</NavLink></li>
          <li><NavLink to='/blog' className={styles.link}>Blog</NavLink></li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`${styles.navBarMobile} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
          <li><NavLink to='/' className={styles.link} onClick={handleLinkClick}>Home</NavLink></li>
          <li><NavLink to='/the-hostel' className={styles.link} onClick={handleLinkClick}>The Hostel</NavLink></li>
          <li><NavLink to='/our-story' className={styles.link} onClick={handleLinkClick}>Our Story</NavLink></li>
          <li><NavLink to='/reservations' className={styles.link} onClick={handleLinkClick}>Reservations</NavLink></li>
          <li><NavLink to='/events' className={styles.link} onClick={handleLinkClick}>Events</NavLink></li>
          <li><NavLink to='/getting-here' className={styles.link} onClick={handleLinkClick}>Getting Here</NavLink></li>
          <li><NavLink to='/contact' className={styles.link} onClick={handleLinkClick}>Contact</NavLink></li>
          <li><NavLink to='/blog' className={styles.link} onClick={handleLinkClick}>Blog</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;