import React from "react";
import styles from './Events.module.css';
import events from './events.json';

export default function Events () {
    return (
        <main>
            <h1>Weekle Events at The Wandering Paisa Hostel</h1>
            <div className={styles.allEvents}>
                {events.map(event => (
                    <div className={styles.singleEvent}>
                        <h3>{event.name} - {event.day}, {event.timeStart} - {event.timeEnd}</h3>
                        <p>{event.info}</p>
                        <div className={styles.eventImg}><img src={event.image}></img></div>
                    </div>
                ))}
            </div>
        </main>
    )
}