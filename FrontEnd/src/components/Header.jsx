import {Link, useLocation} from 'react-router-dom'
import styles from '../styles/Header.module.scss'
import logo from '../assets/argentBankLogo.png'

/**
 * Header Component - Displays the header
 *
 * @component
 * @returns {JSX.Element} - rendered Header component
 */
function Header () {
    const currentPage = useLocation();
    const firstName = localStorage.getItem("firstName")

    function handleLogout () {
        localStorage.removeItem("token")
        localStorage.removeItem("firstName")
        localStorage.removeItem("lastName")
    }

    return (
        <div className={styles.header}>
            <nav className={styles.header__nav}>
                <div className={styles.header__logo}>
                    <Link 
                        to={'/'} 
                        onClick={handleLogout}>
                        <img className={styles.header__img} src={logo} alt="Argent Bank Logo"/>
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                </div>
                <div className={styles.header__signIn}>
                    {(currentPage.pathname === "/" || currentPage.pathname === "/sign-in") &&
                        <Link className={styles.header__link} to={'/sign-in'}>
                            <i className="fa fa-user-circle"></i>
                            <p>Sign In</p>
                        </Link>
                    }
                    {(currentPage.pathname === "/User" || currentPage.pathname === "/EditUser") &&
                        <>
                            <Link 
                                className={styles.header__link} 
                                to={'/User'}>
                                <i className="fa fa-user-circle"></i>
                                <p>{firstName}</p>
                            </Link>
                            <Link 
                                className={styles.header__link} 
                                to={'/'}
                                onClick={handleLogout}>
                                <i className="fa fa-sign-out"></i>
                                <p>Sign Out</p>
                            </Link>
                        </>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header