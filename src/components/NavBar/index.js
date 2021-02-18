import React from 'react';
import './style.css';
import { NavItems } from './NavItems';

const NavBar = () => {

  return (
    <div>
      <nav className='NavBarItem'>
        <ul className='nav-menu'>
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
