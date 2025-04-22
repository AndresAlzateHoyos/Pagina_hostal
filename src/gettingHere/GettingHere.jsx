import React from "react";
import styles from './GettingHere.module.css';

export default function GettingHere () {
    return (
        <main>
            <h1>How to get to The Wandering Paisa Hostel</h1>

            <div className={styles.transportOptions}>
                <h3>From the Terminal Norte bus station:</h3>
                <ul>
                    <li><strong>For buses from</strong> Bogotá, Cartagena, Santa Marta, Bucaramanga.</li>
                    <li>Take the Metro from <strong>Caribe Station → San Antonio → Transfer to Line B (San Javier) → Estadio</strong>.</li>
                    <li>Walk <strong>4 blocks south</strong> on La Setenta (70th St.), then <strong>left on 44A St.</strong> (after Subway & Colanta).</li>
                    <li>If you reach the nightclub La Logia or San Juan St., <strong>you’ve gone too far</strong>.</li>
                </ul>
            </div>

            <div className={styles.transportOptions}>
                <h3>From the Terminal Sur bus station OR the Olaya Herrera local airport:</h3>
                <ul>
                    <li><strong>By Taxi:</strong> ~$7,000–8,000 COP. Tell the driver “La Setenta y Calle San Juan.”</li>
                    <li><strong>By Metro (Cheapest Option):</strong> Walk <strong>4 blocks east</strong> on Calle 10 → <strong>Take Poblado Metro → San Antonio → Transfer to Line B (San Javier) → Estadio</strong>.</li>
                    <li>Walk 4 blocks south on La Setenta, then left on 44A St. (after Subway & Colanta).</li>
                </ul>
            </div>

            <div className={styles.transportOptions}>
                <h3>From the Terminal Norte bus station:</h3>
                <ul>
                    <li><strong>For buses from</strong> Bogotá, Cartagena, Santa Marta, Bucaramanga.</li>
                    <li>Take the Metro from <strong>Caribe Station → San Antonio → Transfer to Line B (San Javier) → Estadio</strong>.</li>
                    <li>Walk <strong>4 blocks south</strong> on La Setenta (70th St.), then <strong>left on 44A St.</strong> (after Subway & Colanta).</li>
                    <li>If you reach the nightclub La Logia or San Juan St., <strong>you’ve gone too far</strong>.</li>
                </ul>
            </div>


            <h3>Calle 44A # 68A - 76, Laureles; Medellin - Colombia</h3>
            <div></div>
            <div className={styles.map}>
                <iframe className={styles.frameMap}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.104860758036!2d-75.59203786365825!3d6.24991147994675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429083c7c5321%3A0xec88d58eefc4fc52!2sThe%20Wandering%20Paisa!5e0!3m2!1ses!2sco!4v1745330550412!5m2!1ses!2sco"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </main>
    );
}