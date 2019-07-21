import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import Header from '../../components/Header';
import { ResumeModal, AboutModal } from '../../components/Modals';

import './Home.scss';

const Home = () => {
  return (
    <GlobalContext.Consumer>
      {context => {
        return (
          <main className='container-home'>
            <Header />
            <section className='home__text-container--primary'>
              {/* <div>Chancy Leath</div> */}
              <div>Create / Develop</div>
            </section>
            <section className='home__text-container--secondary'>
              <ul className='home__list'>
                <li className='home__list-item'><Link className='page-link' to='/portfolio'>Portfolio</Link></li>
                <li className='home__list-item'><Link className='page-link' to='/skills'>Skills</Link></li>
                <li className='home__list-item'><Link className='page-link' to='/contact'>Contact</Link></li>
              </ul>

            </section>
            <AboutModal />
            <ResumeModal />
          </main>
        )
      }}
    </GlobalContext.Consumer>

  );
};

export default Home;