import styles from '../styles/Features.module.scss'
import iconMoney from '../assets/icon-money.png'
import iconChat from '../assets/icon-chat.png'
import iconSecurity from '../assets/icon-security.png'
import Feature from './Feature.jsx'

/**
 * Features Component - Displays the features
 *
 * @component
 * @returns {JSX.Element} - rendered Features component
 */
function Features () {
    const FEATURES_DATA = [
        {
            icon: iconChat,
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            icon: iconMoney,
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!"
        },
        {
            icon: iconSecurity,
            title: "Security you can trust",
            text: "We use top of the line encryption to make sure your data and money is always safe."
        }
    ]
    return (
        <div className={styles.features}>
            {FEATURES_DATA.map((feature) => (
                <Feature key={feature.title} feature={feature}/>
            ))}
            
        </div>
    )
}

export default Features