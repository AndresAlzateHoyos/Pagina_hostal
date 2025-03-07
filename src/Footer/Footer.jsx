import React from "react";
import styles from './Footer.module.css'

function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactFooter}>
                <h2>Need to get in contact with us?</h2>
                <div>Call us or send us a message:</div>
                <div>Cell: <strong>+57 315 539 4950</strong> Landline: <strong>604 301 7570</strong></div>
                <button type="submit" className={styles.sendMessageButton}>SEND A MESSAGE</button>
            </div>
            <div className={styles.bookNow}>
                <h2>Book a Room Now</h2>
                <div>Booking is easy and safe through hostelworld's trusted booking engine:</div>
                <button type='submit'><div>CLICK HERE TO</div> <h3>BOOK NOW</h3></button>
            </div>
        </footer>
    )
};

export default Footer