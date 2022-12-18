// no futuro essa pagina seria preenchida com dados de back, as informacoes de niveis etc
import styles from '../styles/pages/profile.module.css'
import Img from '../assets/coursera.jpg'
import anime from '../assets/anime.png'
import books from '../assets/book.png'
import aspas from '../assets/aspas.png'
import movie from '../assets/movie.png'
import heart from '../assets/heart.png'
import music from '../assets/music.png'
import review from '../assets/review.png'


export function Profile() {
    return (

        <div className={styles.oi}>
            <div className={styles.ui}>
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                        <img src={Img} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.details}>
                            <h2>Ana Sulli <br /> <span>
                                Student, Art lover, Nerd </span></h2>

                            <div className={styles.data}>
                                <p className={styles.review}>reviews:</p>

                                <h3>2 <br /> <span><img className={styles.icon} src={anime} /></span>
                                </h3>
                                <h3>2 <br /> <span><img className={styles.icon} src={books} /></span>
                                </h3>
                                <h3>2 <br /> <span><img className={styles.icon} src={movie} /></span>
                                </h3>
                                <h3>2 <br /> <span><img className={styles.icon} src={music} /></span>
                                </h3>
                            </div>
                            <div className={styles.actionBtn}>
                                <button>Follow</button>
                                <button>Message</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.postWrapper}>
                    <div className={styles.title}><h3>Latest Review</h3>
                        <div className={styles.postContent}>
                       
                            <img src="https://miro.medium.com/max/1069/1*dNgJBcX8V7QFwWBaXtpj0A.jpeg" alt="" />
                            <p><h2>Mother!, natureza, mulher, Maria. </h2>Mother!, in my op, is a representation of what a men thinks a women's job is. To serve to his wishes and desires, to help him get success in his career, as well as taking care of the house and all of the domestic affairs. Aronofsky shows a angst so strong it makes ur dizzy and uncomfortable to see the Woman _which has no name_ going back and forth around the house, fixing things, cooking, cleaning, literally building the house they live, and also carrying a baby. At the end, we see a apocalyptical journey that leads to the only feeling a serving woman can have, solitude. </p>
                            <h1>#Movie</h1>
                        </div>

                    </div>
                </div>

              
                
            </div>
        </div >


    )
}
