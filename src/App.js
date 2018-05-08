import React from 'react';
import AdminDirectory from './components/AdminDirectory';
import EndUserDirectory from './components/EndUserDirectory';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="directory-app">
        <header className="header">
          <h1 className="header__title">Directory Example App</h1>
        </header>
        <div className="page-content">
          <div className="page-content__column">
            <AdminDirectory />
          </div>
          <div className="page-content__column">
            <EndUserDirectory />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
