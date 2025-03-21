import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from '../styles/Profile.module.scss'
import Account from '../components/Account.jsx'
import Header from '../components/Header.jsx'
import DATA from '../data/dataAccount.js'
import PropTypes from 'prop-types'

/**
 * Profile Component - Displays the homepage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Profile component
 */
function Profile ({user, setUser}) {

    const [newFirstName, setNewFirstName] = useState(user.firstName)
    const [newLastName, setNewLastName] = useState(user.lastName)

    const navigate = useNavigate()

    useEffect(() => {
        if (!user.token) {
          navigate("/Sign-In")
          return
        }
      }, [user.token, navigate])

    async function handleSave (e) {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${user.token}`, // Envoie le token dans le header
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: newFirstName,
                    lastName: newLastName,
                }),
            })

            if (response.ok) {
                console.log("Informations mises à jour avec succès !")
                setUser(prevUser => ({
                    ...prevUser,
                    firstName: newFirstName,
                    lastName: newLastName,
                }))

                navigate("/User")
            } else {
                console.log("Erreur lors de la mise à jour des informations.");
            }
        } catch (error) {
            console.error("Erreur de requête :", error)
            console.log("Une erreur s'est produite, veuillez réessayer.")
        }
    }

    function handleCancel(e) {
        e.preventDefault()
        navigate("/User")
    }

    return (
        <>
            <Header user={user} setUser={setUser} />
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
                                autoComplete="given-name"
                            />
                            <input 
                                type="text" 
                                id="lastName"
                                name="lastName"
                                value={newLastName} 
                                onChange={(e) => setNewLastName(e.target.value)}
                                autoComplete="family-name"
                            />
                        </div>
                        <div className={styles.profile__btn}>
                            <button 
                                type='submit' 
                                // className={styles.signIn__btnSave}
                            >
                                Save
                            </button>
                            <button 
                                type='button' 
                                // className={styles.signIn__btnCancel}
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
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

Profile.propTypes = {
    user: PropTypes.shape({
        token: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    }),
    setUser: PropTypes.func
}

export default Profile