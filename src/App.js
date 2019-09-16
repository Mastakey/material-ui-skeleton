import React, {Component, Fragment} from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/Main';
import './App.css';

export default class extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}
