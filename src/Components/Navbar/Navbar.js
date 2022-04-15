import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () =>  {
    return( 
    <div className='headerContainer'>
        <header>
            <NavLink to='/' exact="true"><h1 className="header_title">Bankist</h1></NavLink>
            <nav>
                <ul className="nav_links">
                    <li><NavLink to='/login' exact="true">Sign In</NavLink></li>
                    <li><NavLink to='/register' exact="true">Get Started</NavLink></li>
                </ul>
            </nav>
        </header>
    </div>
    )
}

export default Navbar;