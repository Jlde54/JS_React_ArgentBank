import styles from '../styles/Account.module.scss'

/**
 * Account Component - Displays the header
 *
 * @component
 * @returns {JSX.Element} - rendered Account component
 */
function Account ({item}) {

    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            <section className={styles.account}>
                <div className={styles.account__content}>
                    <h3 className={styles.account__title}>{item.title}</h3>
                    <p className={styles.account__amount}>{item.amount}</p>
                    <p className={styles.account__description}>{item.desc}</p>
                </div>
                <div className={styles.account__button}>
                    <button className={styles.account__transactionButton }>{item.btn}</button>
                </div>
            </section>
        </>
    )
}

export default Account