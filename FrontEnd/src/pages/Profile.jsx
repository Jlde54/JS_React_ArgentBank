import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from '../styles/Profile.module.scss'
import Account from '../components/Account.jsx'
import Header from '../components/Header.jsx'
import DATA from '../data/dataAccount.js'
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../userSlice.js"

/**
 * Profile Component - Displays the homepage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Profile component
 */

function Profile () {

    const user = useSelector((state) => state.user)
    
    const [newFirstName, setNewFirstName] = useState(user.firstName)
    const [newLastName, setNewLastName] = useState(user.lastName)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function handleSave (e) {
        e.preventDefault()
        try {
            await dispatch(updateUser({
                token: user.token,
                firstName: newFirstName,
                lastName: newLastName,
            })).unwrap()
            navigate("/User")
        } catch (error) {
            console.error("Erreur de requête :", error)
        }
    }

    function handleCancel(e) {
        e.preventDefault()
        navigate("/User")
    }

    return (
        <>
            <Header />
            <div className={styles.profile}>
                <section className={styles.profile__header}>
                    <h1 className={styles.profile__title}>Welcome back</h1>
                    <form className={styles.profile__form} onSubmit={handleSave}>
                        <div className={styles.profile__input}>
                            <input 
                                type="text" 
                                id="firstName"
                                name="firstName"
                                value={newFirstName}
                                onChange={(e) => setNewFirstName(e.target.value)}
                                required
                                autoComplete="given-name"
                            />
                            <input 
                                type="text" 
                                id="lastName"
                                name="lastName"
                                value={newLastName} 
                                onChange={(e) => setNewLastName(e.target.value)}
                                required
                                autoComplete="family-name"
                            />
                        </div>
                        <div className={styles.profile__btn}>
                            <button 
                                type='submit' 
                            >
                                Save
                            </button>
                            <button 
                                type='button' 
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                        <div className={styles.profile__msg}>
                            {user.loading ? "Update ongoing..." : ""}
                            {user.error ? user.error : ""}
                        </div>
                    </form>
                </section>
                {DATA.map((item) => (
                    <Account key={item.title} item={item} />
                ))}
            </div>
        </>
    )
}

export default Profile