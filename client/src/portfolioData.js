import tatuScreenshot from './images/portfolioScreenshots/Tatu_Home.png';
import eventDashScreenshot from './images/portfolioScreenshots/eventDash.png';
import nytSearchScreenshot from './images/portfolioScreenshots/NYTSearch.png';

const data = [
    {
        name: 'Tatu',
        description: "This is a multi-user app built with the MERN stack (MongoDB, ExpressJS, NodeJS, ReactJS) with mobile first design. It allows artists to create profiles and upload images of their work that customers can then search and save to their favorites. My contribution: Overall design, built all front end components for the Customer page, built all back end routes/controllers for getting/posting images.",
        technology: 'React React-Router Express Express-Sessions bcrypt Node MongoDB Axios API React-Materialize Google Fonts Google Icons',
        deployed: "https://tatuappv2.herokuapp.com/",
        repository: "https://github.com/penajtokyo/tatu.git",
        image: tatuScreenshot
    },
    {
        name: 'Event Dash',
        description: 'Dashboard app to create and keep track of activities and events with your group (or groups) of friends all in one place, regardless of the platform your groups use. My contribution: Overall design and layout, built event creation form/modal and associated error messages, cards displaying event details, and modal showing event details.',
        technology: 'HTML CSS Materialize Google Fonts JavaScript jQuery Firebase Smarty Streets API Google API Twitter API',
        deployed: 'https://chancy23.github.io/Event-Dash/',
        repository: 'https://github.com/chancy23/Event-Dash.git',
        image: eventDashScreenshot
    },
    {
        name: 'Fan Page',
        description: "This is a personal pet project showcasing the many talents of Cher. It is an unofficial fan page that I've used to encapsulate many of the technologies I've learned over the last year. Users can read a short bio, look at a photo gallery, take a trivia challenge, view upcoming concerts, and look up the movies Cher has been in.",
        technology: 'HTML CSS Javascript jQuery Handelbars Google Materialize and Google Fonts Node Express OMDB API Bands In Town API',
        deployed: 'https://cher-fan-page032019.herokuapp.com/',
        repository: 'https://github.com/chancy23/cher_fanpage.git',
        image: 'https://i.makeagif.com/media/3-11-2019/swKc_s.gif'
    },
    {
        name: 'NYT Search',
        description: 'This is a single page app built with the MERN stack (MongoDB, ExpressJS, NodeJS, ReactJS) and with mobile first in mind. It allows users to use a search form to find articles in the New York Times article API. The articles can be saved to the database and rendered in the Saved Articles section of the page to view later, or read by clicking the Read button in the Results area.',
        technology: 'React React-Router Express Node MomentJS MongoDB Axios Google Materialize Google Fonts',
        deployed: 'https://nytsearch010319.herokuapp.com/',
        repository: 'https://github.com/chancy23/NYT-Search-React.git',
        image: nytSearchScreenshot
    },
]

export default data;
