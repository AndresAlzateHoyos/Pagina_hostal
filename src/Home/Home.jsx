import React from 'react';
import styles from './Home.module.css';
import BookABed from '../BookABed/BookABed';

function Home () {
    return (
        <main>
            <h1>The Wandering Paisa Backpackers Hostel</h1>
            <div className='imgs-line'>
                <img></img>
                <img></img>
                <img></img>
            </div>
            <h2>Experience Medellin's Most Authentic Hostel!</h2>
            <div>Stay at the award-winning <strong>Wandering Paisa Hostel</strong>, known for its cultural vibe, social atmosphere, and unbeatable location in <strong>Laureles</strong>—one of Medellin's top neighborhoods.</div>

            <div>Enjoy <strong>weekly events</strong> where backpackers meet locals, from <strong>language exchanges</strong> to <strong>salsa nights</strong>. Walk to bars, clubs, and city attractions, or relax in our comfortable, friendly space.</div>

            <h2>Join the adventure -- book your stay today!</h2>
            <BookABed />

            <div className='imgs-line'>
                <img></img>
                <img></img>
                <img></img>
            </div>

            <div className='information-line'>
                <div>Info 1</div>
                <div>Info 2</div>
                <div>Info 3</div>
                <div>Info 4</div>
            </div>

        </main>
    )
};

export default Home