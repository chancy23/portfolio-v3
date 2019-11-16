import React from 'react';
import Header from '../../components/Header';
import './Contact.scss';
import { GlobalContext } from '../../context/GlobalState';
import Footer from '../../components/Footer';
import { LinkedInIcon, GithubIcon, PhoneIcon } from '../../components/Icons';

const Contact = () => {
  return (
  <GlobalContext.Consumer>
    {context => {
      const showHide = context.state.displayMessage ? 'visible contact__message-display' : 'hidden';      

      return (
        <main className="container-contact">
          <Header />
          <article className='contact'>
          <h1 className='contact__page-header'>Contact</h1>
            <section className='contact__email'>
              <h2 className='contact__section-header'>Email</h2>
              <form className='form'>
                <div className='form__row'>
                  <div className='form__group'>
                    <input
                      className='form__input' 
                      type='text'
                      name='firstName'
                      value={context.state.firstName}
                      onChange={context.handleInputChange}
                      required={true}
                      placeholder='First Name'
                    />
                    <label className='form__label'>First Name</label>
                  </div>

                  <div className='form__group'>
                    <input
                      className='form__input' 
                      type='text'
                      name='lastName'
                      value={context.state.lastName}
                      onChange={context.handleInputChange}
                      required={true}
                      placeholder='Last Name'
                    />
                    <label className='form__label'>Last Name</label>
                  </div>
                </div>

                <div className='form__group'>
                  <input 
                    className='form__input' 
                    type='email'
                    name='email'
                    value={context.state.email}
                    onChange={context.handleInputChange}
                    required={true}
                    placeholder='Email'
                    />
                  <label className='form__label'>Email</label>
                </div>

                <div className='form__row'>
                  <div className='form__group'>
                    <input 
                      className='form__input' 
                      type='text'
                      name='phoneNumber'
                      value={context.state.phoneNumber}
                      onChange={context.handleInputChange}
                      required={true}
                      placeholder='Phone Number'
                    />
                    <label className='form__label'>Phone Number</label>
                  </div>

                  <div className='form__group'>
                    <select 
                      className='form__select'
                      type='select'
                      name='preferredMethod'
                      value={context.state.preferredMethod}
                      onChange={context.handleInputChange}
                    >
                      <option value=''>Preferred Contact</option>
                      <option value='Email'>Email</option>
                      <option value='Text'>Text</option>
                      <option value='Call'>Call</option>
                    </select>
                    <label className='form__label'>Preferred Contact</label>
                  </div>
                </div>

                <div className='form__group'>
                  <textarea 
                  className='form__text-area' 
                  name='messageDetails'
                  value={context.state.messageDetails}
                  onChange={context.handleInputChange}
                  required={true}
                  placeholder='Detail Your Project or Ask a Question'
                  />
                  <label className='form__label'>Detail Your Project or Ask a Question</label>
                </div>
                <div className='form__button-row'>
                  <button className='btn btn__primary' onClick={context.handleSubmitEmail}>Submit</button>
                  <button className='btn btn__cancel' onClick={context.handleClearForm}>Clear</button>
                </div>
                <div className={showHide}>{context.state.message}</div>
              </form>
            </section>
            <section className='contact__other-methods'>
              <h2 className='contact__section-header'>Other Ways to Reach Me</h2>
              <div className='contact__methods'>
                <a className='contact__link' href='https://www.linkedin.com/in/chancy-leath' target='_blank' rel='noopener noreferrer'><LinkedInIcon /></a>
                <a className='contact__link' href='https://github.com/chancy23' target='_blank' rel='noopener noreferrer'><GithubIcon /></a>
                <div className='contact__phone'>
                  <PhoneIcon />
                  <p className='contact__phone-text'>801-891-2965</p>
                </div>
              </div>
            </section>
          </article>
          <Footer />
        </main>
      )
    }}
  </GlobalContext.Consumer>
  );
};

export default Contact;