import logo from "../images/logo.svg"

const NavbarMobile = () => {
    return (
        <nav className="navbar-mobile">
            <a href="/">
                <img src={logo} alt={logo}/>
            </a>
            <h1>STUDENTS</h1>
        </nav>

    );
}
export default NavbarMobile;