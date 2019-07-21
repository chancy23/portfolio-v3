import React from 'react';
import Ticker from 'react-ticker';
import { GlobalContext } from '../../context/GlobalState';
import Header from "../../components/Header";
import data from '../../portfolioData';
import { CodeIcon, DisplayIcon} from '../../components/Icons';

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
                      <div className='project__container-front'>
                        <h4 className='project__header'>{project.name}</h4>
                        {/* <img className='project__image' src={project.image} alt={project.name}/> */}
                        <div className='project__cta project__cta--deployed'><a className='project__btn' href={project.deployed}><DisplayIcon /></a></div>
                        <div className='project__cta project__cta--repository' ><a className='project__btn' href={project.repository}><CodeIcon /></a></div>
                      </div>
                      <div className='project__container-back'>
                        <p>{project.description}</p>
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
          </main>
        )
      }}
    </GlobalContext.Consumer>

  );
};

export default Portfolio;