import styles from '../styles/Feature.module.scss'

/**
 * Feature Component - Displays the feature
 *
 * @component
 * @returns {JSX.Element} - rendered Feature component
 */
function Feature ({feature}) {
    return (
        <div className={styles.feature}>
            <img className={styles.feature__icon} src={feature.icon} alt="Icon Chat" />
            <h3 className={styles.feature__title}>{feature.title}</h3>
            <p className={styles.feature__text}>{feature.text}</p>
        </div>
    )
}

export default Feature