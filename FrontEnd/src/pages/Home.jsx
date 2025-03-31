import styles from '../styles/Home.module.scss'
import Banner from '../components/Banner.jsx'
import Features from '../components/Features.jsx'
import Header from '../components/Header.jsx'

/**
 * Home Component - Displays the homepage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Home component
 */
function Home () {

    return (
        <>
            <Header />
            <div className={styles.home}>
                <Banner />
                <Features />
            </div>
        </>
    )
}

export default Home