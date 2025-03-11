import {Link} from 'react-router-dom'
import styles from '../styles/Error.module.scss'
import Header from '../components/Header.jsx'

function Error() {

    function handleLogout () {
        localStorage.removeItem("token")
        localStorage.removeItem("firstName")
        localStorage.removeItem("lastName")
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