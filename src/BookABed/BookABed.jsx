import React from "react";
import styles from './BookABed.module.css'

function BookABed () {
    return (
        <div className={styles.bookDiv}>
            <h2>So What Are You Waiting For?</h2>
            <button type="submit" className={styles.bookButton}>BOOK A BED OR ROOM NOW</button>
        </div>
    )
};

export default BookABed;