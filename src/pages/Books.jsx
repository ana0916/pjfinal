import React, { Component } from 'react';
import styles from '../styles/pages/main.module.css'
import star from '../assets/star.png'

 
export function Books() {
    return (
        <>
           <div className={styles.oi}>
            <div className={styles.cardWrapper}>
                
                <div className={styles.cardContainer}>
                    <img className={styles.mediaImg} src="https://cf.shopee.com.br/file/91d5665534f9c67582f37a0f4d54a9db" alt="" />
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.cardTitle}>Ciranda de Pedra by lygia fagundes teles</p>
                    <p className={styles.cardText}>Virgínia, a protagonista, vive uma infância difícil com pais separados, sendo criada pela mãe, Laura, e seu médico neurologista, Daniel, que na verdade, descobre-se depois que é seu verdadeiro pai. Ela visita a mansão do ex-marido de sua mãe, Dr. Natércio, que todos acreditam ser seu pai, mas não consegue conviver bem com as irmãs Otávia e Bruna, que vivem com o Dr. Natércio e com os seus vizinhos: Letícia, Afonso e Conrado (pelo qual nutre uma paixão).</p>
                    
                    <p className={styles.cardReview}>Review <div className={star}><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} />
                    </div></p>
                </div>
                
            </div>

            <div className={styles.cardWrapper}>
                
                <div className={styles.cardContainer}>
                    <img className={styles.mediaImg} src="https://ae01.alicdn.com/kf/H90d46964d8dd4ae199dbccf1f7d6daccJ.jpg?width=750&height=1277&hash=2027" alt="" />
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.cardTitle}>TIAN GUAN CI FU by mxtx</p>
                    <p className={styles.cardText}>Xie Lian é o Príncipe Herdeiro do Reino de Xian Le, que apesar de ter sido o queridinho na juventude e o favorito no céu, tornou-se uma piada entre os Deuses após interferir em assuntos mortais o que causou o seu rebaixamento e exilio para o reino mortal. </p>
                    
                    <p className={styles.cardReview}>Review <div className={star}><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} /><img className={styles.mediaStar} src={star} />
                    </div></p>
                </div>
                
            </div>
            </div>
        </>
    );
}

