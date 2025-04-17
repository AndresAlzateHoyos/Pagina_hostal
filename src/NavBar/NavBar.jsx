import React from "react";
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar () {
return (
    <header>
        <nav>
            <img className={styles.logoImg} src='../../images/Logo/logo_redondo_beige.png' alt='Logo del hostal'></img>
            <ul>
                <li><NavLink to='/' className={styles.link}>Home</NavLink></li>
                <li><NavLink to='/the-hostel' className={styles.link}>The Hostel</NavLink></li>
                <li><NavLink to='/about' className={styles.link}>About</NavLink></li>
                <li><NavLink to='/reservations' className={styles.link}>Reservations</NavLink></li>
                <li><NavLink to='/events' className={styles.link}>Events</NavLink></li>
                <li><NavLink to='/getting-here' className={styles.link}>Getting Here</NavLink></li>
                <li><NavLink to='/contact' className={styles.link}>Contact</NavLink></li>
                <li><NavLink to='/blog' className={styles.link}>Blog</NavLink></li>
            </ul>
        </nav>
    </header>
)
};

export default NavBar