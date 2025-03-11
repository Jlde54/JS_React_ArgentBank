import styles from '../styles/Sign-In.module.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../components/Header.jsx'

/**
 * Sign_In Component - Displays the homepage
 *
 * @component
 * @returns {JSX.Element} - rendered Sign_In component
 */
function Sign_In () {

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

            localStorage.setItem("token", dataLogin.body.token)

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
                
                localStorage.setItem("firstName", dataProfile.body.firstName)
                localStorage.setItem("lastName", dataProfile.body.lastName)

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
            <Header />
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

export default Sign_In