// make this the context that is passed down in App js file
import React, { Component } from 'react';

export const GlobalContext = React.createContext();

class GlobalState extends Component {
  //define all state for all of app components
  state = {
    name: "Chancy Leath",
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

  // write all methods for app here, and pass down in value of Providere
  render() {
    return (
      <GlobalContext.Provider value={
        {
          state: this.state,
          //put methods from above here to export to children
          showAboutModal: this.showAboutModal,
          showResumeModal: this.showResumeModal,
          hideModal: this.hideModal
        }
      }>
        {/* this passes it down in the App.js file to be used in all children */}
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalState;