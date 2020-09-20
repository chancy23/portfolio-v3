import React from 'react';
import Ticker from 'react-ticker';
import { GlobalContext } from '../../context/GlobalState';
import Footer from '../../components/Footer';
import Header from "../../components/Header";
import data from '../../portfolioData';
import { CodeIcon, CodeIconDisabled, DisplayIcon, PlayIcon} from '../../components/Icons';

import './Portfolio.scss';


const Portfolio = () => {
  return (
    <GlobalContext.Consumer>
      {context => {
        return (
          <main className='container-portfolio'>
            <Header />
            <h1 className='center'>My Work</h1>
            <section className='project'>
              {data.map((project, index) => (
                <div key={index} className='project__container'>
                  <div className='project__wrapper'>
                    {/* <svg><rect></rect></svg> */}
                    <div className='project__side project__side--front'>
                      <h4 className='project__header'>{project.name}</h4>
                    </div>
                    <div className='project__side project__side--back'>
                      <p className='project__back-text'>{project.description}</p>
                    </div>
                    <div className='project__cta'>
                      {project.deployed !== 'decomm' ?
                        (
                          <a className='project__btn project__btn--deployed' href={project.deployed} rel='noopener noreferrer' target='_blank'><DisplayIcon /></a>
                        ) 
                        :
                        (false)
                      }
                      {project.privateRepo === false ?
                        (
                          <a className='project__btn project__btn--repository' href={project.repository} rel='noopener noreferrer' target='_blank'><CodeIcon /></a>
                        )
                        :
                        (
                          <CodeIconDisabled />
                        )
                      }
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
            <Footer />
          </main>
        )
      }}
    </GlobalContext.Consumer>

  );
};

export default Portfolio;