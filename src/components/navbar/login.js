const Login = ({ isLoggedIn, onToggle }) => {
    return (
        <button className="login-btn" onClick={onToggle}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    )
}

export { Login }
