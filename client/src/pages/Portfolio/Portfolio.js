import React from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Header from "../../components/Header"

const Portfolio = () => {
    return (
        <GlobalContext.Consumer>
            {context => {
                return (
                    <main className='container page'>
                        <Header />
                        <h1>Projects</h1>
                    </main>
                )
            }}
        </GlobalContext.Consumer>
      
    );
};

export default Portfolio;