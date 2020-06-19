import React from 'react';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes } from './components/Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
