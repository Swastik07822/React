import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <ul>
                    <li>
                        <NavLink to="/">Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/createblog">Create Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Signup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout">Logout</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
