import React from 'react';
import Ticker from 'react-ticker';
import { GlobalContext } from '../../context/GlobalState';
import Header from "../../components/Header";
import data from '../../portfolioData';
import { ResumeModal, AboutModal } from '../../components/Modals';
import { CodeIcon, DisplayIcon, PlayIcon} from '../../components/Icons';

import './Portfolio.scss';


const Portfolio = () => {
  return (
    <GlobalContext.Consumer>
      {context => {
        return (
          <main className='project-container page'>
            <Header />
            <h1 className='center'>Projects</h1>
            <section className='project'>
              {data.map((project, index) => (
                <div key={index} className='project__container'>
                  <div className='project__wrapper'>
                    {/* <svg><rect></rect></svg> */}
                    <div className='project__side project__side--front'>
                      <h4 className='project__header'>{project.name}</h4>
                    </div>
                    <div className='project__side project__side--back'>
                      <p>{project.description}</p>
                    </div>
                    <div className='project__cta'>
                      <a className='project__btn project__btn--deployed' href={project.deployed} rel='noopener noreferrer' target='_blank'><DisplayIcon /></a>
                      <a className='project__btn project__btn--repository' href={project.repository} rel='noopener noreferrer' target='_blank'><CodeIcon /></a>
                      <a className='project__btn project__btn--video' href={project.video} rel='noopener noreferrer' target='_blank'><PlayIcon /></a>

                    </div>
                  </div>
                  <Ticker height={25} speed={7}>
                  {() => (
                    <p className='project__keywords'>{project.technology}</p>
                  )}
                </Ticker>
              </div>
              ))}
            </section>
            <AboutModal />
            <ResumeModal />
          </main>
        )
      }}
    </GlobalContext.Consumer>

  );
};

export default Portfolio;