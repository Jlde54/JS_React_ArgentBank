import {Link, useLocation} from 'react-router-dom'
import styles from '../styles/Header.module.scss'
import logo from '../assets/argentBankLogo.png'
import PropTypes from 'prop-types'

/**
 * Header Component - Displays the header
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Header component
 */
function Header ({user, setUser}) {

    const currentPage = useLocation();

    function handleLogout () {
        setUser({
            token: null,
            firstName: "",
            lastName: "",
            // rememberedEmail: user.rememberedEmail
        })
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
                    {(currentPage.pathname === "/" || currentPage.pathname === "/Sign-In") &&
                        <Link className={styles.header__link} to={'/Sign-In'}>
                            <i className="fa fa-user-circle"></i>
                            <p>Sign In</p>
                        </Link>
                    }
                    {(currentPage.pathname === "/User" || currentPage.pathname === "/Profile") &&
                        <>
                            <Link 
                                className={styles.header__link} 
                                to={'/User'}>
                                <i className="fa fa-user-circle"></i>
                                <p>{user.firstName}</p>
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

Header.propTypes = {
    user: PropTypes.shape({
        token: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    }),
    setUser: PropTypes.func
}

export default Header