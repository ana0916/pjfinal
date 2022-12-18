import React, { Component } from 'react';
import styles from '../styles/pages/main.module.css'
import star from '../assets/star.png'

 
export function Movies() {
    return (
        <>
         <div className={styles.oi}>
            <div className={styles.cardWrapper}>
                
                <div className={styles.cardContainer}>
                    <img className={styles.mediaImg} src="https://miro.medium.com/max/1069/1*dNgJBcX8V7QFwWBaXtpj0A.jpeg" alt="" />
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.cardTitle}>Mother! by Darren Aronofsky</p>
                    <p className={styles.cardText}>A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence..</p>
                    
                    <p className={styles.cardReview}>Review <div className={star}><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} />
                    </div></p>
                </div>
                
            </div>

            <div className={styles.cardWrapper}>
                
                <div className={styles.cardContainer}>
                    <img className={styles.mediaImg} src="https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg" alt="" />
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.cardTitle}>Everything Everywhere All at Once</p>
                    <p className={styles.cardText}>An aging Chinese immigrant is swept up in an insane adventure, in which she alone can save the world by exploring other universes connecting with the lives she could have led.</p>
                    
                    <p className={styles.cardReview}>Review <div className={star}><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} />
                    </div></p>
                </div>
                
            </div></div>
        </>
    );
}

