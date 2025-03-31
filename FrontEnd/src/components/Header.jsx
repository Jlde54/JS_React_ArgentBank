import {Link, Navigate, useNavigate} from 'react-router-dom'
import styles from '../styles/Header.module.scss'
import logo from '../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../userSlice'

/**
 * Header Component - Displays the header
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Header component
 */

function Header () {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)

    function handleLogout () {
        dispatch(logout())
        navigate('/')
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
                            <button 
                                className={styles.header__link} 
                                onClick={handleLogout}>
                                <i className="fa fa-sign-out"></i>
                                <p>Sign Out</p>
                            </button>
                        </>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header