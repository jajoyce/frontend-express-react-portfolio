import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <nav className="nav">
                <Link to="/">
                    <h2>John A. Joyce</h2>
                </Link>
                <Link to="/projects">
                    <h2>Projects</h2>
                </Link>
                <Link to="/about">
                    <h2>About</h2>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
