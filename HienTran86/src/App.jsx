/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import  Greeting  from './components/Greeting';


import { useState } from 'react' 

function App() {
  const [userName, setUserName] = useState('');

  const handleFormSubmit = (name) => {
    setUserName(name); 
  };

  return (
    <div className="App">
      
      <UserForm onSubmit={handleFormSubmit} />
      <Greeting name={userName} /> 
    </div>
  );
}

export default App;
