import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Welcome</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
