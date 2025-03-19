import styles from '../styles/Home.module.scss'
import Banner from '../components/Banner.jsx'
import Features from '../components/Features.jsx'
import Header from '../components/Header.jsx'
import PropTypes from 'prop-types'

/**
 * Home Component - Displays the homepage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Home component
 */
function Home ({user, setUser}) {

    return (
        <>
            <Header user={user} setUser={setUser} />
            <div className={styles.home}>
                <Banner />
                <Features />
            </div>
        </>
    )
}

Home.propTypes = {
    user: PropTypes.shape({
        token: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    }),
    setUser: PropTypes.func
}

export default Home