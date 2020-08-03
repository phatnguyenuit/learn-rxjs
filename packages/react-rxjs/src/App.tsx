import React from 'react';
import RxJSExample from 'containers/RxJSExample';
import ScrollToTop from 'components/ScrollToTop';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My <code>RxJS example</code> is served below.
        </p>
        <a className="App-link" href="#rxjs-example" rel="noopener noreferrer">
          Scroll down
          <br />
          &darr;
        </a>
      </header>
      <RxJSExample />
      <ScrollToTop offset={40}>&uarr;</ScrollToTop>
    </div>
  );
}

export default App;
