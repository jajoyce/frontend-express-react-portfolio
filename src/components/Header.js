import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <h2>John A. Joyce Portfolio</h2>
            <nav className="nav">
                <Link to="/">
                    <h3>Home</h3>
                </Link>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
                <Link to="/projects">
                    <h3>Projects</h3>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
