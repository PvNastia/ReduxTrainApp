import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Header.css'; // Імпортуємо стилі

function Header() {
    const user = useSelector((state) => state.log.user);
    const isLoggedIn = useSelector((state) => state.log.isLoggedIn);

    return (
        <header>
            <div className="user-greeting">
                {isLoggedIn ? (
                    <>Hello, <span>{user.name}</span>!</>
                ) : (
                    "Please log in"
                )}
            </div>

            <nav className="nav-links">
                <Link to="/" className="nav-item">About Redux</Link>
                <Link to="/teor" className="nav-item">Learn</Link>
                <Link to="/tests" className="nav-item">Tests</Link>


                <Link to="/log" className="nav-item reg-link">
                    {isLoggedIn ? "Profile" : "Registration"}
                </Link>
            </nav>
        </header>
    );
}

export default Header;
