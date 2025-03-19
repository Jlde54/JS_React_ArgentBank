import styles from '../styles/Sign-In.module.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../components/Header.jsx'
import PropTypes from 'prop-types'

/**
 * Sign_In Component - Displays the homepage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Sign_In component
 */
function Sign_In ({user, setUser}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const savedEmail = localStorage.getItem("rememberedEmail")
        if (savedEmail) {
            setEmail(savedEmail)
            setRememberMe(true)
        }
    }, [])

    async function handleSubmit (e) {
        e.preventDefault()
        setError("")
        try {
            const resLogin = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })
            const dataLogin = await resLogin.json()
            if (!resLogin.ok) throw new Error(dataLogin.message || "Identifiants invalides")

            setUser(prevUser => ({
                ...prevUser,
                token: dataLogin.body.token,
            }))

            try {
                const resProfile = await fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${dataLogin.body.token}`, // Envoie le token dans le header
                        "Content-Type": "application/json",
                    },
                })

                const dataProfile = await resProfile.json()
                if (!resProfile.ok) throw new Error(dataProfile.message || "Erreur de récupération")

                setUser(prevUser => ({
                    ...prevUser,
                    firstName: dataProfile.body.firstName,
                    lastName: dataProfile.body.lastName,
                }))

            } catch (error) {
                console.error(error)
                navigate("/")
            }

            if (rememberMe) {
                localStorage.setItem("rememberedEmail", email)
            } else {
                localStorage.removeItem("rememberedEmail")
            }

            navigate("/User")

        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <>
            <Header user={user} setUser={setUser} />
            <div className={styles.signIn}>
                <section className={styles.signIn__content}>
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1 className={styles.signIn__title}>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.signIn__inputWrapper}>
                            <label htmlFor="username">Username</label>
                            <input 
                                type="email" 
                                id="username" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete='email'
                            />
                        </div>
                        <div className={styles.signIn__inputWrapper}>
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete='current-password'
                            />
                        </div>
                        <div className={styles.signIn__inputRemember}>
                            <input 
                                type="checkbox" 
                                id="remember-me" 
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button type='submit' className={styles.signIn__button}>Sign In</button>
                    </form>
                    {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
                </section>
            </div>
        </>
    )
}

Sign_In.propTypes = {
    user: PropTypes.shape({
        token: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    }),
    setUser: PropTypes.func
}

export default Sign_In