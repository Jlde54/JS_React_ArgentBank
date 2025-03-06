import styles from '../styles/Footer.module.scss'

/**
 * Footer Component - Displays the footer
 *
 * @component
 * @returns {JSX.Element} - rendered Footer component
 */
function Footer () {
    return (
        <div className={styles.footer}>
            <p className={styles.footer__copyright}>Copyright 2020 Argent Bank</p>
        </div>
    )
}

export default Footer