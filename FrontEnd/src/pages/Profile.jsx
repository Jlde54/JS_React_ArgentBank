import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from '../styles/Profile.module.scss'
import Account from '../components/Account.jsx'
import Header from '../components/Header.jsx'
import DATA from '../data/dataAccount.js'

/**
 *Profile Component - Displays the homepage
 *
 * @component
 * @returns {JSX.Element} - rendered Profile component
 */
function Profile () {

    const firstName = localStorage.getItem("firstName")
    const lastName = localStorage.getItem("lastName")

    const [newFirstName, setNewFirstName] = useState(firstName)
    const [newLastName, setNewLastName] = useState(lastName)

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) {
          navigate("/Sign-In")
          return
        }
      }, [navigate])

    async function handleSave (e) {
        e.preventDefault()
        const token = localStorage.getItem("token")
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`, // Envoie le token dans le header
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: newFirstName,
                    lastName: newLastName,
                }),
            })

            if (response.ok) {
                console.log("Informations mises à jour avec succès !")
                localStorage.setItem("firstName", newFirstName)
                localStorage.setItem("lastName", newLastName)
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
            <Header />
            <div className={styles.profile}>
                <section className={styles.profile__header}>
                    <h1 className={styles.profile__title}>Welcome back</h1>
                    <form className={styles.profile__form} onSubmit={handleSave}>
                        <div className={styles.profile__input}>
                            <input 
                                type="text" 
                                value={newFirstName}
                                onChange={(e) => setNewFirstName(e.target.value)}
                            />
                            <input 
                                type="text" 
                                value={newLastName} 
                                onChange={(e) => setNewLastName(e.target.value)}
                            />
                        </div>
                        <div className={styles.profile__btn}>
                            <button 
                                type='submit' 
                                className={styles.signIn__btnSave}
                            >
                                Save
                            </button>
                            <button 
                                type='button' 
                                className={styles.signIn__btnCancel}
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

export default Profile