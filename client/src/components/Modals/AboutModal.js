import React, {useContext, useEffect} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import profileImage from '../../images/chancyleath.jpg';

export const AboutModal = () => {

  const context = useContext(GlobalContext);

  //this prevents scrolling of the body when modals are open
  useEffect(() => {
      context.state.showAboutModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [context.state.showAboutModal]);

  return (
    <GlobalContext.Consumer>
      {context => {
        // toggle class of modal to show or hide it
        const showHide = context.state.showAboutModal ? 'modal modal--display' : 'modal modal--hidden';

        return (
          <div className={showHide}>
            <div className='modal__main'>
              <div className='modal__body-about'>
                <img className='modal__image' src={profileImage} alt='Chancy Leath'></img>
                <div className='modal__text-area'>
                  <h2 className='modal__text-header'>Who is Chancy?</h2>
                  <p>I'm a certified MERN (Mongo, Express, React, Node) Full Stack Web Developer, but my real passion lies in the
                    front end--making great looking, responsive, and functional applications using HTML5, CSS3, and JavaScript.
                    In 2018 I decided to take on a new challenge by learning web development, and its something I really have fallen
                    in love with. I also have
                    my Project Management certification and am a Certified Usability Analyst (which, if you think about it, makes me
                    triple threat!).
                  </p>
                  <p>I recently launched two freelance projects and am currently on making additional feature enhancements. One is an eCommerce site for a client who makes custom resin artwork (including an adminstrative side for the client to manage their products). The other is an eMagazine for a certified Life Coach, which includes subscription and account management for customers. 
                  </p>
                  <p>On a personal note, I grew up on a 1000 acre ranch in northwestern Wyoming, making me a country boy at heart.
                    After years of "city living" I now find myself owning a 10 acre mini ranch of my own and getting back to my country roots in my free time.
                  </p>
                </div>
              </div>
              <div className="modal__footer">
                <button className='btn btn__primary modal__button' onClick={context.hideModal}>Close</button>
              </div>

            </div>

          </div>
        )
      }}
    </GlobalContext.Consumer>
  );
};