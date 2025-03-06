import styles from '../styles/Home.module.scss'
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Features from '../components/Features.jsx'
import Footer from '../components/Footer.jsx'

/**
 * Home Component - Displays the homepage
 *
 * @component
 * @returns {JSX.Element} - rendered Home component
 */
function Home () {
    return (
        <div className={styles.home}>
            <Header />
            <Banner />
            <Features />
            <Footer />
        </div>
    )
}

export default Home