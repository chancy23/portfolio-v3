import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    return (
        <article className='nav__bottom'>
            <ul className='nav__bottom__list'>
                <li className='nav__bottom__list-item'><NavLink className='page-link' to='/portfolio'>Portfolio</NavLink></li>
                <li className='nav__bottom__list-item'><NavLink className='page-link' to='/skills'>Skills</NavLink></li>
                <li className='nav__bottom__list-item'><NavLink className='page-link' to='/contact'>Contact</NavLink></li>
              </ul>
        </article>
    );
};

export default Footer;