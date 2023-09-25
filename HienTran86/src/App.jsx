/* eslint-disable react/prop-types */

import './App.css'
// eslint-disable-next-line no-unused-vars
import Header from './components/Header'
// eslint-disable-next-line no-unused-vars
import Main from './components/Main'
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (a) => {
    setUserInput(a.target.value);
  };
  const handleButtonClick = (a) => {
    alert(userInput)
  }
  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="Please type somthing"
        onChange={handleInputChange}
      />
      <button
        onClick={handleButtonClick}
      >Print</button>
    </div>
  );
}

export default App;