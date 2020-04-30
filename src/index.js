import React from 'react';
import ReactDOM from 'react-dom';
import img from './react.png';
import './main.scss';

const App = () => {
  return (
    <main role="main" className="app">
      <h1>React App</h1>
      <img src={img} alt="logo"/>
    </main>
  );
};

ReactDOM.render(<App/>, document.getElementById(`root`));