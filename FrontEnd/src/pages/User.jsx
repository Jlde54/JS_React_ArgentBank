import {Link} from 'react-router-dom'
import styles from '../styles/User.module.scss'
import Account from '../components/Account'

/**
 * User Component - Displays the homepage
 *
 * @component
 * @returns {JSX.Element} - rendered User component
 */
function User () {
    const DATA = [
        {
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            desc: "Available balance",
            btn: "View transactions"
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            desc: "Available balance",
            btn: "View transactions"
        },
        {
            title: "Argent Bank Credit Card (x8349)",
            amount: "$184.30",
            desc: "Available balance",
            btn: "View transactions"
        }
    ]
    return (
        <div className={styles.user}>
            <section className={styles.user__header}>
                <h1 className={styles.user__title}>Welcome back<br />Utilisateur!</h1>
                <Link className={styles.user__editButton} to={'/user'}>Edit name</Link>
            </section>
            {DATA.map((item) => (
                <Account key={item.title} item={item} />
            ))}
        </div>
    )
}

export default User