import styles from '../styles/Home.module.scss'
import Banner from '../components/Banner.jsx'
import Features from '../components/Features.jsx'

/**
 * Home Component - Displays the homepage
 *
 * @component
 * @returns {JSX.Element} - rendered Home component
 */
function Home () {
    return (
        <div className={styles.home}>
            <Banner />
            <Features />
        </div>
    )
}

export default Home