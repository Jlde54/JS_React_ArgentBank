import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import styles from '../styles/User.module.scss'
import Account from '../components/Account.jsx'
import Header from '../components/Header.jsx'
import DATA from '../data/dataAccount.js'
import { useSelector } from 'react-redux'   // New
// import PropTypes from 'prop-types'

/**
 * User Component - Displays the homepage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered User component
 */
// function User ({user, setUser}) {
function User () {

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)     // New

    useEffect(() => {
            if (!user.token) {
            navigate("/Sign-In")
            return;
        }
    }, [user.token, navigate]);

    return (
        <>
            {/* <Header user={user} setUser={setUser} /> */}
            <Header />
            <div className={styles.user}>
                <section className={styles.user__header}>
                    <h1 className={styles.user__title}>Welcome back<br />{user.firstName} {user.Link}</h1>
                    <Link className={styles.user__editButton} to={'/Profile'}>Edit name</Link>
                </section>
                {DATA.map((item) => (
                    <Account key={item.title} item={item} />
                ))}
            </div>
        </>
    )
}

// User.propTypes = {
//     user: PropTypes.shape({
//         token: PropTypes.string,
//         firstName: PropTypes.string,
//         lastName: PropTypes.string,
//     }),
//     setUser: PropTypes.func
// }

export default User