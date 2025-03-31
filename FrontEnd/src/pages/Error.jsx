import {Link} from 'react-router-dom'
import styles from '../styles/Error.module.scss'
import Header from '../components/Header.jsx'
import { useDispatch } from 'react-redux'
import { logout } from '../userSlice.js'

/**
 * Error Component - Displays the errorpage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Error component
 */

function Error() {

    const dispatch = useDispatch()

    function handleLogout () {
        dispatch(logout())
    }

    return (
        <>
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

export default Error