import React from "react";
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'

function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactFooter}>
                <div>
                    <h2>Need to get in contact with us?</h2>
                    <div>Call us or send us a message:</div>
                </div>
                <div>
                    <div>Cell: <strong>+57 315 539 4950</strong> </div>
                    <div>Landline: <strong>604 301 7570</strong></div>
                </div>
                <div>
                    <button type="submit" className={styles.sendMessageButton}>SEND A MESSAGE</button>
                </div>
            </div>
            <div className={styles.contactFooterMobile}>
            <div>
                    <div>Cell: <strong>+57 315 539 4950</strong> </div>
                    <div>Landline: <strong>604 301 7570</strong></div>
                </div>
                <div>
                    <button type="submit" className={styles.sendMessageButton}><NavLink to='/contact' className={styles.link}>Send us a Message</NavLink></button>
                </div>
            </div>
        </footer>
    )
};

export default Footer