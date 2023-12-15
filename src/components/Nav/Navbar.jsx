
import Logo from '../../assets/images/NOFOLogomed.svg'
import {Link} from 'react-scroll'
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
            <Link className='homeLink' to={'header'} spy={true}  smooth={true} offset={-500} duration={500}>
            <img src={Logo} alt="Logo" />
            </Link>
    

            <div className={menuOpen ? "menu start" : "menu"} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                <li><Link to={'about'} spy={true}  smooth={true} offset={-120} duration={700} onClick={handleToggle}>Om os</Link></li>
                <li><Link to={'Frivillige'} spy={true}  smooth={true} offset={-120} duration={700} onClick={handleToggle}>Frivillige</Link></li>
                <li><Link to={'medlem'} spy={true}  smooth={true} offset={-300} duration={700} onClick={handleToggle}>Bliv Medlem</Link></li>
                <li><Link to={'partnere'} spy={true}  smooth={true} offset={-150} duration={700} onClick={handleToggle}>Samarbejds Partnere</Link></li>
                <li><Link to={'bestyrelsen'} spy={true}  smooth={true} offset={-150} duration={700} onClick={handleToggle}>Bestyrelsen</Link></li>
                <li><Link to={'fonde'} spy={true}  smooth={true} offset={-150} duration={700} onClick={handleToggle}>Fonde</Link></li>
                <li><Link to={'kontakt'} spy={true}  smooth={true} offset={-150} duration={700} onClick={handleToggle}>Kontakt</Link></li>
            </ul>
        </nav>
    )
}
