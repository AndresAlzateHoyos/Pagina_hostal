import React from "react";
import styles from './Gallery.module.css';
import images from './gallery.json'

export default function Gallery () {
    return (
        <div className={styles.gallery}>
            {images.map((image, index) => (
                <img key={index} src={import.meta.env.BASE_URL + image.src} alt={image.alt} />
            ))}
        </div>
    )
}