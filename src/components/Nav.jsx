import Cart from "./Cart";
import Search from "./Search";

const Nav = ({toggleTheme}) => {
    return (
        <nav className="mainNav">
            <a href={'/about'}>About</a>
            <a href={'/shop'}> Shop</a>
            <Cart /> 
            <Search /> 
            <button onClick={() => toggleTheme()}>toggle theme</button>
        </nav>
    )
}

export default Nav;