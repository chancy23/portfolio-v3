import React from 'react';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState';
import Logo from '../Logo';
import { ResumeModal, AboutModal } from '../../components/Modals';

import './Header.scss';

const Nav = () => {

  return (
    <GlobalContext.Consumer>
      {context => {
        return (
          <article className='header'>
            <section onClick={context.handleRedirectHome} className='header__logo-wrapper'>
              <Link to="/"><Logo /></Link>
            </section>
            <section className='header__text-wrapper'>
              <ul className='header__list'>
                <li className='header__list-item'><button className=' btn__flat' onClick={context.showAboutModal}>About</button></li>
                <li className='header__list-item'><button className=' btn__flat' onClick={context.showResumeModal}>Resume</button></li>
              </ul>
              <h1 className='header__title header__title--flyout'>Chancy Leath</h1>
            </section>
            <section className='header__title'>
              <h1>Chancy Leath</h1>
            </section>
            <AboutModal />
            <ResumeModal />
          </article>
        )
      }}
    </GlobalContext.Consumer>


  );
};

export default Nav;