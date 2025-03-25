import {Link} from 'react-router-dom'
import styles from '../styles/Error.module.scss'
import Header from '../components/Header.jsx'
import { useDispatch } from 'react-redux'       // New
import { logout } from '../userSlice.js'        // New
// import PropTypes from 'prop-types'

/**
 * Error Component - Displays the errorpage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Error component
 */
// function Error({user, setUser}) {
function Error() {                      // New

    const dispatch = useDispatch()      // New

    function handleLogout () {
        // setUser({
        //     token: null,
        //     firstName: "",
        //     lastName: "",
        // })
        dispatch(logout())              // New
    }

    return (
        <>
            {/* <Header user={user} setUser={setUser} /> */}
            <Header />
            <div className={styles.error}>
                <p className={styles.error__404}>404</p>
                <p className={styles.error__msg}>La page que vous demandez n&apos;existe pas</p>
                <nav className={styles.error__nav}>
                    <Link 
                        className={styles.error__link} 
                        to={'/'}
                        onClick={handleLogout}>
                        Retourner sur la page d&apos;accueil
                    </Link>
                </nav>
            </div>
        </>
    )
}

// Error.propTypes = {
//     user: PropTypes.shape({
//         token: PropTypes.string,
//         firstName: PropTypes.string,
//         lastName: PropTypes.string,
//     }),
//     setUser: PropTypes.func
// }

export default Error