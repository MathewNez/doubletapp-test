import logo from "./logo.svg"
const Navbar = () =>  {
    return(
        <nav className="navbar">
            <img src={ logo } alt={ logo }/>
            <h1>STUDENTS by <code>M3f3w_1337</code></h1>
        </nav>

    );
}
export default Navbar;