import {Link} from 'react-router-dom'
import styles from '../styles/Header.module.scss'
import logo from '../assets/argentBankLogo.png'

/**
 * Header Component - Displays the header
 *
 * @component
 * @returns {JSX.Element} - rendered Header component
 */
function Header () {
    return (
        <div className={styles.header}>
            <nav className={styles.header__nav}>
                <div className={styles.header__logo}>
                    <Link to={'/'}>
                        <img className={styles.header__img} src={logo} alt="Argent Bank Logo"/>
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                </div>
                <div className={styles.header__signIn}>
                    <Link className={styles.header__link} to={'/'}>
                        <i className="fa fa-user-circle"></i>
                        <p>Sign In</p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header