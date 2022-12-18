import React, { Component } from 'react';
import styles from '../styles/pages/main.module.css'
import star from '../assets/star.png'


export function Animation() {
    return (
        <>
         <div className={styles.oi}>
        
            <div className={styles.cardWrapper}>
                
                <div className={styles.cardContainer}>
                    <img className={styles.mediaImg} src="https://cf.shopee.com.br/file/f75282ba3aadf55543a19defce54e1f0" alt="" />
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.cardTitle}>Neon Genesis Evangelion by Hideaki Ano</p>
                    <p className={styles.cardText}>Fifteen yearsa after the second impact, Shinji Ikari is requested to pilot and EVA, a biomecha machine, to fight Angels and prevent the third impact.</p>
                    
                    <p className={styles.cardReview}>Review <div className={star}><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} />
                    </div></p>
                </div>
                
            </div>

            <div className={styles.cardWrapper}>
                
                <div className={styles.cardContainer}>
                    <img className={styles.mediaImg} src="https://flxt.tmsimg.com/assets/p10864479_b_v13_aa.jpg" alt="" />
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.cardTitle}>The Legend of Korra by  Bryan Konietzko & Michael Dante DiMartino</p>
                    <p className={styles.cardText}>After the events on the previous season, the world meets its new Avatar, a rebelious girl that has a long journey through maturity, self discovery and world saving. </p>
                    
                    <p className={styles.cardReview}>Review <div className={star}><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} />
                    </div></p>
                </div>
                
            </div>
            </div>
           
        </>
    );
}

