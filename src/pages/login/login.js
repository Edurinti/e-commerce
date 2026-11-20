import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./login.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.trim()) {
            setSubmitted(true)
            setTimeout(() => {
                navigate("/")
            }, 1000)
        }
    }

    return (
        <div className="container">
            <div className="loginWrapper">
                <div className="loginCard p-4">
                    <h2 className="loginTitle">Login to ShopHub</h2>
                    {submitted ? (
                        <div style={{ textAlign: "center", color: "green", padding: "20px 0" }}>
                            <p>Login successful! Redirecting...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-control loginField">
                                <input
                                    type="text"
                                    placeholder="Username or Email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control loginField">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        padding: "10px",
                                        backgroundColor: "transparent",
                                        border: "none",
                                        fontSize: "16px",
                                        borderRadius: "50px",
                                    }}
                                />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="loginSubmitBtn">
                                    Sign In
                                </button>
                            </div>
                            <div style={{ textAlign: "center", marginTop: "10px", fontSize: "0.9rem" }}>
                                <Link to="/" className="titleLink">
                                    Return to Home
                                </Link>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export { Login }
