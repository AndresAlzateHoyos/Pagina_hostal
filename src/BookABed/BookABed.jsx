import React from "react";
import styles from './BookABed.module.css'
import { useNavigate } from "react-router-dom";

function BookABed () {
    const navigate = useNavigate();
    
    const handleBookClick = () => {
        navigate('/reservations');
    }

    return (
        <div className={styles.bookDiv}>
            <h2>So What Are You Waiting For?</h2>
            <button 
                type="submit" 
                className={styles.bookButton}
                onClick={handleBookClick}
            >BOOK A BED OR ROOM NOW</button>
        </div>
    )
};

export default BookABed;