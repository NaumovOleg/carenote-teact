import React, { Component } from 'react';
import logo from './logo.svg';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './components/auth/auth';
import Main from './components/root/main';
import Header from './components/header';
import  './app.scss';


class App extends Component {
  render() {
      const routers = window.currntCustomer == undefined?<Auth/>:<div><Header/><Main/></div>
    return (
      <div className="App" >
          <Header/>
          <Main/>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        authentificated: state.auth.loggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default withRouter ( connect ( mapStateToProps, mapDispatchToProps ) ( App ) );
