import {Link} from 'react-router-dom'
import styles from '../styles/Sign-In.module.scss'

/**
 * Sign_In Component - Displays the homepage
 *
 * @component
 * @returns {JSX.Element} - rendered Sign_In component
 */
function Sign_In () {
    return (
        <div className={styles.signIn}>
            <section className={styles.signIn__content}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1 className={styles.signIn__title}>Sign In</h1>
                <form>
                    <div className={styles.signIn__inputWrapper}>
                        <label for="username">Username</label
                        ><input type="text" id="username" />
                    </div>
                    <div className={styles.signIn__inputWrapper}>
                        <label for="password">Password</label
                        ><input type="password" id="password" />
                    </div>
                    <div className={styles.signIn__inputRemember}>
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    <Link className={styles.signIn__button} to={'/user'}>Sign In</Link>
                </form>
            </section>

        </div>
    )
}

export default Sign_In