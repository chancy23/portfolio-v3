import React from 'react';

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
        <main className='skills'>
            <ExpressLogo />
            <JqueryLogo />
            <SassLogo />
            <NodeLogo />
            <AdobeLogo />
            <GithubLogo />
            <MysqlLogo />
            <NpmLogo />
            <ReactLogo />
            <CssLogo />
            <JsLogo />
            <MongoLogo />
            <HtmlLogo />
        </main>
    );
};

export default Skills;