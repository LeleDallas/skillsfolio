import { ActiveNav, NavbarProps } from "../types"
import { navbarItems } from "../utils"

const Navbar = ({ active, setActive }: NavbarProps) =>
    <nav className="navbar">
        <ul className="navbar-list">
            {navbarItems.map(item =>
                <li key={item} className="navbar-item">
                    <button
                        onClick={() => setActive(item as ActiveNav)}
                        className={active === item ? "navbar-link  active" : "navbar-link"}
                        data-nav-link>
                        {item}
                    </button>
                </li>
            )}
        </ul>
    </nav>

export default Navbar
