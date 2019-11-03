// make this the context that is passed down in App js file
import React, { Component } from 'react';
import API from '../utils/API';

export const GlobalContext = React.createContext();

class GlobalState extends Component {
  //define all state for all of app components
  state = {
    name: "Chancy Leath",
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    preferredMethod: '',
    messageDetails: '',
    displayMessage: false,
    message: '',
    showAboutModal: false,
    showResumeModal: false,
  };

  // =========================  on clicks to show and hide modals  ==============================

  showAboutModal = () => {
    this.setState({
      showAboutModal: true
    })
  };

  showResumeModal = () => {
    this.setState({
      showResumeModal: true
    })

  };

  hideModal = () => {
    this.setState({
      showAboutModal: false,
      showResumeModal: false
    })
  };

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log('event', event.target.value);

    this.setState({
      [name]: value
    })
  }

  // handleSelection = event => {
  //   event.preventDefault();
  // }

  handleSubmitEmail = event => {
    event.preventDefault();

    const emailData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      preferredMethod: this.state.preferredMethod,
      messageDetails: this.state.messageDetails
    };
    console.log('data for email', emailData);
    // send data to backend to send via nodemailer
    API.sendEmail(emailData)
    .then(response => {
      console.log('response from send email', response);
      if (response.data === 'sent') {
        this.setState({
          displayMessage: true,
          message: 'Your email was sent successfully!',
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          preferredMethod: '',
          messageDetails: '',
        });
        setTimeout(() => {
          this.setState({
            displayMessage: false,
            message: ''
          })
        }, 5000);
      }
    })
    .catch(err =>  {
      console.log(err);
      this.setState({
        displayMessage: true,
        message: "I'm sorry, it looks like there was a problem sending your email. Please try again or contact me at 801-891-2965.",
      })
    });
  };

  handleClearContactForm = event => {
    event.preventDefault();

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      preferredMethod: '',
      messageDetails: '',
    })

  };

  // write all methods for app here, and pass down in value of Providere
  render() {
    return (
      <GlobalContext.Provider value={
        {
          state: this.state,
          //put methods from above here to export to children
          showAboutModal: this.showAboutModal,
          showResumeModal: this.showResumeModal,
          hideModal: this.hideModal,
          handleInputChange: this.handleInputChange,
          handleSubmitEmail: this.handleSubmitEmail
        }
      }>
        {/* this passes it down in the App.js file to be used in all children */}
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalState;