import React from "react";
import styles from './GettingHere.module.css'

export default function GettingHere () {
    return (
        <main>
            <h1>Directions to our Hostel</h1>
            <div>Estas son las indicaciones</div>
            <div className={styles.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.104860758036!2d-75.59203786365825!3d6.24991147994675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429083c7c5321%3A0xec88d58eefc4fc52!2sThe%20Wandering%20Paisa!5e0!3m2!1ses!2sco!4v1745330550412!5m2!1ses!2sco" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    )
}