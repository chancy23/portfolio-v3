import React from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Header from "../../components/Header";
import data from '../../portfolioData';

import './Portfolio.scss';

const Portfolio = () => {
  return (
    <GlobalContext.Consumer>
      {context => {
        return (
          <main className='container page'>
            <Header />
            <h1 className='center'>Projects</h1>
            <section className='project'>
              {data.map((project, index) => (
                <div key={index} className='project__wrapper'>
                  <div className='project__container'>
                    <h4 className='project__header'>{project.name}</h4>
                    {/* <img className='project__image' src={project.image} alt={project.name}/> */}
                    <a className='project__btn project__btn--deployed' href={project.deployed}>Deployed App</a>
                    <a className='project__btn project__btn--repository' href={project.repository}>Source Code</a>

                  </div>
                  <div className='project__keywords'>{project.technology}</div>
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