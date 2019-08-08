import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
    AdobeLogo,
    CssLogo,
    ExpressLogo,
    GithubLogo,
    HtmlLogo,
    JqueryLogo, 
    JsLogo,
    MongoLogo,
    NodeLogo,
    NpmLogo,
    SassLogo, 
    MysqlLogo,
    ReactLogo } from '../../components/LogoIcons';

    import './Skills.scss';

const Skills = () => {
    return (
        <main className='page container-skills'>
            <Header />
            <h1 className='center'>Skills</h1>
            <article className='skills'>
                <div className='skills__wrapper'>
                    <HtmlLogo />
                    <h5 className='margin-bottom-small'>HTML5</h5>
                </div>
                <div className='skills__wrapper'>
                    <CssLogo />
                    <h5 className='margin-bottom-small'>CSS3</h5>
                </div>
                <div className='skills__wrapper'>
                    <JsLogo />
                    <h5>JavaScript</h5>
                </div>
                <div className='skills__wrapper'>
                    <ReactLogo />
                    <h5 className='margin-bottom-small'>ReactJS</h5>
                </div>
                <div className='skills__wrapper'>
                    <JqueryLogo />
                    <h5 className='margin-bottom-small'>jQuery</h5>
                </div>
                <div className='skills__wrapper'>
                    <SassLogo />
                    <h5 className='margin-bottom-small'>Sass</h5>
                </div>
                <div className='skills__wrapper'>
                    <NodeLogo />
                    <h5 className='margin-bottom-small'>Node.js</h5>
                </div>
                <div className='skills__wrapper'>
                    <ExpressLogo />
                    <h5 className='margin-bottom-small'>Express</h5>
                </div>
                <div className='skills__wrapper'>
                    <NpmLogo />
                    <h5 className='margin-bottom-small'>NPM</h5>
                </div>
                <div className='skills__wrapper'>
                    <MongoLogo />
                    <h5>MongoDB</h5>
                </div>
                <div className='skills__wrapper skills__wrapper--1'>
                    <MysqlLogo />
                    <h5 className='margin-bottom-small'>MySQL</h5>
                </div>
                <div className='skills__wrapper skills__wrapper--2'>
                    <AdobeLogo />
                    <h5 className='margin-bottom-small'>Illustrator</h5>
                </div>
                <div className='skills__wrapper skills__wrapper--3'>
                    <GithubLogo />
                    <h5 className='margin-bottom-small'>GitHub</h5>
                </div>
            </article>
            <Footer /> 
        </main>
    );
};

export default Skills;