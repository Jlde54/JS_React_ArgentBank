import {Link} from 'react-router-dom'
import styles from '../styles/Header.module.scss'
import logo from '../assets/argentBankLogo.png'
// import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'       // New
import { logout } from '../userSlice'       // New

/**
 * Header Component - Displays the header
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Header component
 */
// function Header ({user, setUser}) {
function Header () {                // New

    const dispatch = useDispatch()
    
    const user = useSelector((state) => state.user)

    function handleLogout () {
        // setUser({
        //     token: null,
        //     firstName: "",
        //     lastName: "",
        // })
        dispatch(logout())
    }

    return (
        <div className={styles.header}>
            <nav className={styles.header__nav}>
                <div className={styles.header__logo}>
                    <Link 
                        to={'/'} 
                    >
                        <img className={styles.header__img} src={logo} alt="Argent Bank Logo"/>
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                </div>
                <div className={styles.header__signIn}>
                    {!user.token &&
                        <Link className={styles.header__link} to={'/Sign-In'}>
                            <i className="fa fa-user-circle"></i>
                            <p>Sign In</p>
                        </Link>
                    }
                    {user.token &&
                        <>
                            <Link 
                                className={styles.header__link} 
                                to={'/User'}>
                                <i className="fa fa-user-circle"></i>
                                <p>{user.firstName}</p>
                            </Link>
                            <Link 
                                className={styles.header__link} 
                                to={'/Sign-In'}
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

// Header.propTypes = {
//     user: PropTypes.shape({
//         token: PropTypes.string,
//         firstName: PropTypes.string,
//         lastName: PropTypes.string,
//     }),
//     setUser: PropTypes.func
// }

export default Header