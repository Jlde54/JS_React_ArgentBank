import {Link} from 'react-router-dom'
import styles from '../styles/User.module.scss'

/**
 * User Component - Displays the homepage
 *
 * @component
 * @returns {JSX.Element} - rendered User component
 */
function User () {
    return (
        <div className={styles.user}>
            <section className={styles.user__header}>
                <h1 className={styles.user__title}>Welcome back<br />Utilisateur!</h1>
                <Link className={styles.user__editButton} to={'/user'}>Edit name</Link>
            </section>

        </div>
    )
}

export default User