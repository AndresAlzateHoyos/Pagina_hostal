import React from 'react';
import styles from './Home.module.css';
import BookABed from '../BookABed/BookABed';

function Home () {
    return (
        <main className={styles.main}>
            <h1>The Wandering Paisa Backpackers Hostel</h1>
            <div className={styles.imgLine}>
                <img src='../images/home/Group-2.jpg'></img>
                <img src='../images/home/HostelWorldAward.png'></img>
                <img src='../images/home/miguel-22.jpg'></img>
            </div>
            <div className={styles.experienceMedellin}>
            <h2>Experience Medellin's Most Authentic Hostel!</h2>
            <div>Stay at the award-winning <strong>Wandering Paisa Hostel</strong>, known for its cultural vibe, social atmosphere, and unbeatable location in <strong>Laureles</strong>—one of Medellin's top neighborhoods.</div>

            <br></br>

            <div>Enjoy <strong>weekly events</strong> where backpackers meet locals, from <strong>language exchanges</strong> to <strong>salsa nights</strong>. Walk to bars, clubs, and city attractions, or relax in our comfortable, friendly space.</div>
            </div>

            <h2>Join the adventure — book your stay today!</h2>


            <BookABed />


            <div className={styles.imgLine}>
                <img src='../images/home/Brazil-Dorm-1.jpg' ></img>
                <img src='../images/home/Uruguay22.jpg'></img>
                <img src='../images/home/Argentina-1.jpg'></img>
            </div>

            <div className={styles.informationLine}>
                <div><strong className={styles.informationData}>3100</strong><br/>
                Backpackers Stayed with Us on 2024</div>
                <div><strong className={styles.informationData}>29</strong><br/>
                Beds in Shared Rooms</div>
                <div><strong className={styles.informationData}>12</strong><br/>
                Fun Events Every Month</div>
                <div><strong className={styles.informationData}>2</strong><br/>
                Comfortable Private Rooms</div>
            </div>

        </main>
    )
};

export default Home