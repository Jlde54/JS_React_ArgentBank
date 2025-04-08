import styles from '../styles/Banner.module.scss'
import bankTree from '../assets/bank-tree.webp'

/**
 * Banner Component - Displays the banner
 *
 * @component
 * @returns {JSX.Element} - rendered Banner component
 */
function Banner () {
    const BANNER_DATA = {
        subtitle1: "No fees.",
        subtitle2: "No minimum deposit.",
        subtitle3: "High interest rates.",
        text: "Open a savings account with Argent Bank today!",
        imgAlt: "Bank Tree",
        imgSrc: bankTree
    }
    return (
        <div className={styles.banner}>
            <img className={styles.banner__img} src={BANNER_DATA.imgSrc} alt={BANNER_DATA.imgAlt}/>
            <section className={styles.banner__content} >
                <h2 className="sr-only">Promoted Content</h2>
                <p className={styles.banner__subtitle} >{BANNER_DATA.subtitle1}</p>
                <p className={styles.banner__subtitle} >{BANNER_DATA.subtitle2}</p>
                <p className={styles.banner__subtitle} >{BANNER_DATA.subtitle3}</p>
                <p className={styles.banner__text} >{BANNER_DATA.text}</p>
            </section>
            
        </div>
    )
}

export default Banner