import styles from '../styles/Sign-In.module.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../components/Header.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../userSlice.js'

/**
 * Sign_In Component - Displays the homepage
 *
 * @component
 * @param {Object} - user - user data
 * @param {function} - setUser - update user state
 * @returns {JSX.Element} - rendered Sign_In component
 */
function Sign_In () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const user = useSelector(state => state.user )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const savedEmail = localStorage.getItem("rememberedEmail")
        if (savedEmail) {
            setEmail(savedEmail)
            setRememberMe(true)
        }
    }, [])

    useEffect(() => {
        if (user.token) {
          if (rememberMe) {
            localStorage.setItem("rememberedEmail", email)
          } else {
            localStorage.removeItem("rememberedEmail")
          }
          navigate("/User")
        }
      }, [user.token, email, rememberMe, navigate])

    function handleSubmit (e) {
        e.preventDefault()
        dispatch(loginUser({email, password}))
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
                    {user.loading && <p style={{ color: "red", margin: 0 }}>Loading data ...</p>}
                    {user.error && <p style={{ color: "red", margin: 0 }}>{user.error}</p>}
                </section>
            </div>
        </>
    )
}

export default Sign_In