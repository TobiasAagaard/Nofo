import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/NOFOLogomed.svg'
import './Nav.scss'
export const Navbar = () => {
    return (
        <nav className='navContainer'>
            <Link to={'/'}>
            <img src={Logo} alt="Logo" />
            </Link>
            <ul>
                <li><NavLink to={'/'}>Om os</NavLink></li>
                <li><NavLink to={'/'}>Samarbejdspartnere</NavLink></li>
                <li><NavLink to={'/'}>Bliv medlem</NavLink></li>
                <li><NavLink to={'/'}>Kontakt</NavLink></li>
                <li><NavLink to={'/'}>Status</NavLink></li>
                <li><NavLink to={'/'}>Åbningstider</NavLink></li>
            </ul>
        </nav>
    )
}
