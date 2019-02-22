import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './components/auth/auth';
import Main from './components/root/main';
import Header from './components/header';
import  './react.maincss.scss';


class App extends Component {

    constructor(props){
        super( props );
    }

    setMenuRef = ( ref )=>{
        this.menu = ref
    };
    showMenu = (value)=>{
        this.menu.style.display = value
    }

  render() {
      const routers = window.currntCustomer == undefined?<Auth/>:<div><Header/><Main/></div>
    return (
      <div className="App" >
          <Header showMenu={this.showMenu}/>
          <Main showMenu={this.showMenu} setMenuRef={this.setMenuRef}  />
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
