import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
const [click] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
       <Link to = '/' className = "navbar-logo" >Lovely's Cakes</Link> 
          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className='nav-item'>
              <Link to= '/anniversarycake' className='nav-links'> Anniversary Cake  </Link>
            </li>
            <li className='nav-item'>
              <Link  to= '/birthdaycake' className='nav-links' > Birthday Cake  </Link>
              </li>  
             <li className='nav-item'>
              <Link  to= '/customcake' className='nav-links' > Custom Cakes  </Link> 
            </li>
          </ul>
          </div>
      </nav>
    </>
  );
}
export default Navbar;
