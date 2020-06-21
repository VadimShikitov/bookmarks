import React, { useEffect } from 'react';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes } from './components/Routes';
import { useDispatch } from 'react-redux';
import { initApp } from '../src/ducks/app/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
