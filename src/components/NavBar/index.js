import React from 'react';
import './style.css';
import { NavItems } from './NavItems';
import { Link } from 'react-scroll';

const NavBar = () => {

  return (
    <div id='navBarContainer'>
      <nav className='NavBarItem'>
        <ul className='nav-menu'>
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                {/* <a className={item.cName} href={item.url}>
                  {item.title}
                </a> */}
                <Link className={item.cName} to={item.url} smooth={true} duration={1000}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
