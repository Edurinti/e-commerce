import { Link } from "react-router-dom"

const Login = () => {
    return (
        <Link to="/login" className="link">
            <button className="login-btn">
                Login
            </button>
        </Link>
    )
}

export { Login }

