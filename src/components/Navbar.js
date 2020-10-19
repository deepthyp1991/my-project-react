import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
 return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
       <Link to = '/' className='navbar-logo' >Lovely's Cakes</Link> 
       <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className='nav-item'>
              <Link to= '/anniversarycake' className='nav-links' onClick={closeMobileMenu}> Anniversary Cake  </Link>
            </li>
            <li className='nav-item'>
              <Link  to= '/birthdaycake' className='nav-links' onClick={closeMobileMenu} > Birthday Cake  </Link>
              </li>  
             <li className='nav-item'>
              <Link  to= '/customcake' className='nav-links' onClick={closeMobileMenu} > Custom Cakes  </Link> 
            </li>
          </ul>
          </div>
      </nav>
    </>
  );
}
export default Navbar;
