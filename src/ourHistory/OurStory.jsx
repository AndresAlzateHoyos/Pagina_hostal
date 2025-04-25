import React from "react";
import styles from './OurStory.module.css'

export default function OurStory () {
    return (
        <main>
            <h1>Our Story</h1>
            <div className={styles.flexStory}>
                <div className={styles.ownersImg}>
                    <img src={`${import.meta.env.BASE_URL}images/owners/13023492_927533438666_698018445_n-1.jpg`}></img>
                    <img src={`${import.meta.env.BASE_URL}images/owners/Brent-and-Miles.jpg`}></img>
                </div>
                <div className={styles.story}>
                    <p>Hello! We are two brothers from Seattle, Washington. We have been living, working and traveling in Latin America since 2003, enjoying the excitement and adventure of being abroad…until finally finding the crown jewel of Medellín, Colombia. The amazing architecture and charm of the locals was more than enough to inspire us to want to share this amazing city with others. We saw the opportunity to provide a hostel service that was not only safe and enjoyable, but one that would also immerse the traveler in the local culture and benefit the community.</p>

                    <p>Together, we have been working since July 2010 to turn our dream project into a reality and share with our fellow travelers the ultimate backpackers experience. Now that we are open, we invite you to come enjoy “the other side of Medellin” at the Wandering Paisa Hostel!</p>
                </div>
            </div>
        </main>
    )
}