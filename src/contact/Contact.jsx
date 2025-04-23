import React from "react";
import SendMessage from "../sendMessage/SendMessage";
import styles from './Contact.module.css';

export default function Contact () {
    return (
        <main>
            <h1>Contact</h1>
            <h2>Want to get in touch with us?</h2>
            <h3>Please contact us by phone or send us a message!</h3>
            <div className={styles.contact}>
                <div className={styles.contactImg}>
                    <img src='/images/contact/9BD8EE2D-B0D9-4C1C-A86F-B32E00171076.jpeg'></img>
                </div>
                <div className={styles.message}>
                    <h2>We're Available 24/7</h2>
                    <h3>Call us for more information or to book a room:</h3>
                    <p>Cell: <strong>+57 315 539 49 50</strong>. Landline: <strong>604 301 75 70</strong></p>
                    <SendMessage className/>
                </div>
            </div>
        </main>
    )
}