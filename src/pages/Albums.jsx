import React, { Component } from 'react';
import styles from '../styles/pages/main.module.css'
import star from '../assets/star.png'


export function Albums() {
    return (
        <>
        <div className={styles.oi}>
            <div className={styles.cardWrapper}>
                
                <div className={styles.cardContainer}>
                    <img className={styles.mediaImg} src="https://media.pitchfork.com/photos/593ed23cf6f585756595affa/1:1/w_320,c_limit/b24dfb11.jpg" alt="" />
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.cardTitle}>CTRL - Album by SZA</p>
                    <p className={styles.cardText}>"The long-awaited debut from the Jersey singer is an opulent, raw R&B album that constantly tests the borders of the genre. SZA’s deeply personal lens on modern romance gives these songs endless life. - Pitchfork"</p>
                    
                    <p className={styles.cardReview}>Review <div className={star}><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.greyStar} src={star} />
                    </div></p>
                </div>
                
            </div>

            <div className={styles.cardWrapper}>
                
                <div className={styles.cardContainer}>
                    <img className={styles.mediaImg} src="https://media.pitchfork.com/photos/5929a1899d034d5c69bf29ab/1:1/w_320,c_limit/a2fb43da.jpg" alt="" />
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.cardTitle}>Yeezus - ALBUM by Ye</p>
                    <p className={styles.cardText}>In passing, Yeezus may seem like a blind attempt at genre-blending, margin challenging mash-ups, but once experienced, proves to be more of the encompassing, thought provoking, and at times gut-wrenching art Kanye West has consistently fed the culture with. - The Source </p>
                    
                    <p className={styles.cardReview}>Review <div className={star}><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} />
                    </div></p>
                </div>
                
            </div></div>
        </>
    );
}

