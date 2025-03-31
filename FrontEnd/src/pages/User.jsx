import {Link} from 'react-router-dom'
import styles from '../styles/User.module.scss'
import Account from '../components/Account.jsx'
import Header from '../components/Header.jsx'
import DATA from '../data/dataAccount.js'
import { useSelector } from 'react-redux'

/**
 * User Component - Displays the homepage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered User component
 */

function User () {

    const user = useSelector((state) => state.user)

    return (
        <>
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

export default User