import React from "react";
import styles from './Reservations.module.css';

export default function Reservations () {
    return (
        <main>
            <h1>Want to Make a Booking with Us?</h1>
            <div className={styles.allEngines}>
                <h2>Book directly through our booking engine and save money!:</h2>

                <div className={styles.bookingEngineLogo}>
                    <a href='#'>
                        <img src={`${import.meta.env.BASE_URL}images/bookings/bookdirect.png`} />
                    </a>
                </div>

                <div className={styles.otherEngines}>
                    <h2>Or book through one of the most known and trusted booking engines!:</h2>

                    <div className={styles.bookingEngineLogo}>
                        <a href="https://www.hostelworld.com/hostels/p/47546/the-wandering-paisa-backpackers-hostel/">
                            <img src={`${import.meta.env.BASE_URL}images/bookings/hostelworld.png`} />
                        </a>
                    </div>

                    <div className={styles.bookingEngineLogo}>
                        <a href='https://hostelhop.io/es/hostels/660b00d6d1b8432ca6107ac1?checkInDate=2025-04-25&checkOutDate=2025-04-26&noOfGuests=1&currency=EUR'>
                            <img src={`${import.meta.env.BASE_URL}images/bookings/hostelhop.jpeg`} />
                        </a>
                    </div>

                    <div className={styles.bookingEngineLogo}>
                        <a href="https://www.booking.com/hotel/co/the-wandering-paisa.es.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDKIAQGYAQq4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AqvepcAGwAIB0gIkOTg3ZDYxMTktZDY3MS00YzgxLWJlY2YtOWU3ZDljZDZjZTQ12AIG4AIB&sid=2ab2a0c0da2f033eb665eb731d01a643&checkin=2025-04-23&checkout=2025-04-24&dest_id=-592318&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&srepoch=1745543798&srpvid=98e4a56c49bb002b&type=total&ucfs=1&">
                            <img src={`${import.meta.env.BASE_URL}images/bookings/booking.png`} />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}