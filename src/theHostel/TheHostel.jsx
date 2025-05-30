import React, { useState } from 'react';
import styles from './TheHostel.module.css';
import Gallery from '../gallery/Gallery';

function TheHostel() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const handleClick = () => {
    setGalleryOpen(false);
  }

  return (
    <main>
      <h1>About The Hostel</h1>
      <h2 >Experience Authentic Colombia at the Wandering Paisa</h2>
      <div className={styles.experienceColombia}>
        <p><strong>🏡 Stay in a traditional Colombian mansion</strong> designed to give you the <strong>most authentic backpacker experience in Medellin</strong>. Our <strong>bohemian-themed decor</strong>, inspired by South American and Colombian culture, sets the perfect vibe for traveles looking to connect and explore.</p>

        <h3>Comfortable & Unique Rooms</h3>
        <ul>
          <li><strong>5 dorms</strong> (max <strong>8 beds per room</strong>) & <strong>2 private rooms</strong>, each with a <strong>unique hand-painted country theme</strong> by local art students.</li>

          <li><strong>Premium bunks</strong> designed for <strong>privacy</strong>, featuring <strong>comfortable mattresses, storage lockers, and sturdy frames</strong>—no squeaky or shaky beds!</li>

          <li><strong>6 remodeled bathrooms</strong> with <strong>24-hour hot water</strong> and sleek, modern tiles.</li>
        </ul>

        <p>🌟 Wheter you're here to explore Medellin's vibrant culture or simply relax, <strong>The Wandering Paisa Hostel has everything you need for an unforgettable stay!</strong></p>
      </div>
      <div><img src='/images/theHostel/2C4B6727-61F7-410E-B977-8C79ED393321-2.jpeg' className={styles.theHostelImg}></img></div>

      <div className={styles.importantsHostel}>
        <div>
          <h2>Relax, Connect & Enjoy at The Wandering Paisa Hostel</h2>

          <div className={styles.experienceColombia}>
          <p>🎬 🎮<strong>Chill, Play & Stream: Unwind with Netflix or either our Nintendo Switch or Xbox Series X</strong> on our <strong>52-inch plasma TV with cable</strong>, or kick back in our <strong>rooftop hammock zone</strong>, wheter you're looking to relax after a day of exploring or socialize with fellow travelers, we've got the perfect spot for you!</p>

          <p>🍷 <strong>Grab a drink at our Paisa Bar</strong> and immerse yourself in the local culture! Join our <strong>Tuesday Salsa Classes</strong> to learn some moves with fellow travelers, or practice your Spanish (and more!) at our lively <strong>Thursday Language Exchange</strong>. It’s the perfect way to meet locals, make friends, and experience the real Medellín.</p>
        </div>
      </div>

      <div>
        <h2>Amenities for Every Traveller:</h2>

        <div className={styles.experienceColombia}>
          <ul>
            <li><strong>Fully equipped kitchen</strong> to cook your favorite meals</li>
            <li><strong>Speedy laundry service</strong> to keep your clothes fresh</li>
            <li><strong>High-speed WiFi & free internet</strong> access for all guests</li>
          </ul>
        </div>
      </div>

      </div>

      <div className={styles.galleryDiv}>
        <h2>Check our Pictures here:</h2>
          <button type="submit" className={styles.galleryButton} onClick={() => setGalleryOpen(prev => !prev)}>Click Here to Open up Our Gallery</button>
      </div>
     { galleryOpen && <Gallery />}

     <div className={styles.experienceColombia}>
        <p><strong>The Wandering Paisa</strong>is nestled in <strong>Laureles</strong>, one of the most vibrant neighborhoods. Just steps away, <strong>La Setenta (70<sup>th</sup> Street)</strong> comes alive with <strong>local culture, bustling street life, and some of the best nightlife in the city</strong>.</p>

        <p>Nearby you'll find the <strong>the City Sports Center and Stadium, the historic Bullring, and La 33's lively club district</strong>. Best of all, we're just a <strong>5-minute walk from Estadio Metro Station</strong>, providing fast, easy access to <strong>downtown Medellin and top attractions accross the city.</strong></p>
     </div>

    </main>
  );
}

export default TheHostel;