import React from 'react';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes } from './components/Routes';
import { Provider } from 'react-redux';
import { store } from '../src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='main'>
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
