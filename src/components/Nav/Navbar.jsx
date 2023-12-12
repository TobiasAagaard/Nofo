import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/NOFOLogomed.svg'
import './Nav.scss'
import { useState, useEffect } from 'react'
import _ from 'lodash';


export const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false)

    const sizeChange = _.debounce(() => {
        if (window.scrollY >= 20){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    },25)


    useEffect(() => {
        const handleScroll = () => {
          sizeChange();
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
        
      const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <Link to={'/'}>
            <img src={Logo} alt="Logo" />
            </Link>

            <div className="menu" onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to={'#about'} onClick={handleToggle}>Om os</NavLink></li>
                <li><NavLink onClick={handleToggle}>Samarbejdspartnere</NavLink></li>
                <li><NavLink onClick={handleToggle}>Bliv medlem</NavLink></li>
                <li><NavLink onClick={handleToggle}>Kontakt</NavLink></li>
                <li><NavLink onClick={handleToggle}>Status</NavLink></li>
                <li><NavLink onClick={handleToggle}>Åbningstider</NavLink></li>
            </ul>
        </nav>
    )
}
