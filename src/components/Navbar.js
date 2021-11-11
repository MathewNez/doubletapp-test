import logo from "../images/logo.svg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">
                <img src={logo} alt={logo}/>
            </a>
            <h1>STUDENTS by <code><a href="https://github.com/MathewNez">MathewNez</a></code></h1>
        </nav>

    );
}
export default Navbar;