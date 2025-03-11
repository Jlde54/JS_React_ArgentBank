import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import styles from '../styles/User.module.scss'
import Account from '../components/Account.jsx'
import Header from '../components/Header.jsx'
import DATA from '../data/dataAccount.js'

/**
 * User Component - Displays the homepage
 *
 * @component
 * @returns {JSX.Element} - rendered User component
 */
function User () {

    const firstName = localStorage.getItem("firstName")
    const lastName = localStorage.getItem("lastName")

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/Sign-In")
            return;
        }
    }, [navigate]);

    return (
        <>
            <Header />
            <div className={styles.user}>
                <section className={styles.user__header}>
                    <h1 className={styles.user__title}>Welcome back<br />{firstName} {lastName}</h1>
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