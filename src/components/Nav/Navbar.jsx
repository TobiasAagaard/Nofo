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
                <li><NavLink to={'#about'}>Om os</NavLink></li>
                <li><NavLink>Samarbejdspartnere</NavLink></li>
                <li><NavLink>Bliv medlem</NavLink></li>
                <li><NavLink>Kontakt</NavLink></li>
                <li><NavLink>Status</NavLink></li>
                <li><NavLink>Åbningstider</NavLink></li>
            </ul>
        </nav>
    )
}
