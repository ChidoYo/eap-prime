import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header';
import Content from './components/content';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
