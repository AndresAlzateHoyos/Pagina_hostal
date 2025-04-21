import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

//estilos de swiper
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Home.module.css';
import BookABed from '../BookABed/BookABed';

function Home () {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>The Wandering Paisa Backpackers Hostel</h1>
            <div className={styles.swipers}>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 6000 }}
                loop
                className={styles.carouselLeft}
            >
                <SwiperSlide><img src="/images/carousel/0B9D6225-0563-4F2B-913A-CF33BC827E7F.jpg" alt="Hostel 1" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/Group-2.jpg" alt="Hostel 2" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/Group-4-facebook.jpg" alt="Hostel 3" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/Wandering_Paisa-5-scaled.jpg" alt="Hostel 3" /></SwiperSlide>
            </Swiper>

            <div className={styles.prizeImg}>
                <img src='/images/home/HostelWorldAward.png'></img>
            </div>
            
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 6000 }}
                loop
                className={styles.carouselRight}
            >
                <SwiperSlide><img src="/images/carousel/Hammock-Area.jpg" alt="Hostel 1" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/IMG_5831.jpg" alt="Hostel 2" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/miguel-22.jpg" alt="Hostel 3" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/newsalsa.png" alt="Hostel 3" /></SwiperSlide>
            </Swiper>

            </div>
            <div className={styles.swiperMobile}>
            <div className={styles.prizeImg}>
                <img src='/images/home/HostelWorldAward.png'></img>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 6000 }}
                loop
                className={styles.carouselLeft}
            >
                <SwiperSlide><img src="/images/carousel/0B9D6225-0563-4F2B-913A-CF33BC827E7F.jpg" alt="Hostel 1" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/Group-2.jpg" alt="Hostel 2" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/Group-4-facebook.jpg" alt="Hostel 3" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/Wandering_Paisa-5-scaled.jpg" alt="Hostel 3" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/Hammock-Area.jpg" alt="Hostel 1" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/IMG_5831.jpg" alt="Hostel 2" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/miguel-22.jpg" alt="Hostel 3" /></SwiperSlide>
                <SwiperSlide><img src="/images/carousel/newsalsa.png" alt="Hostel 3" /></SwiperSlide>
            </Swiper>
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
                <img src='../images/rooms/Brazil-Dorm-1.jpg' ></img>
                <img src='../images/rooms/Uruguay22.jpg'></img>
                <img src='../images/rooms/Argentina-1.jpg'></img>
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