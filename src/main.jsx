import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './App.css';
import Heading from './Heading';
import Button from './Button';
render(
  <React.StrictMode>
    <Heading/>
    <App />
    <Button/>
  </React.StrictMode>,
  document.getElementById('root')
);