import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Dropdown from './Dropdown'
import './NavBar.css'
import logo from '../../assets/logo.png'

function NavBar() {

    const[click, setClick] = useState(false);
    const[dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false)
        }
    }

    return (
        <div className='div__navbar'>
            <Link to='/' className='navbar__logo'><img src={logo} alt='logo' /></Link>
            <div className='menu__icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'} >
            <li className='nav__item'>
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        Events
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        Academics
                    </Link>
                </li>
                <li className='nav__item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        Research <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav__item'>
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        Campus Life
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        Admission
                    </Link>
                </li>  
                         
            </ul>
            
        </div>
    )
}

export default NavBar
