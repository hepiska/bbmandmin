import React, { Component } from 'react';
import logo from './logo.svg';
import { Header, Product } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Product />
      </div>
    );
  }
}

export default App;
