/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";
import style from './App.module.css'
import { AppContainer } from "./style";
import Image from './assets/react.svg';


function App() {
  
   
    const [time, setTime] = useState('day');
  
   
    const handleTimeChange = (newTime) => {
      setTime(newTime);
    };
  
    return (
      <div className="App">
        <button onClick={() => handleTimeChange('night')}>Night</button>
        <button onClick={() => handleTimeChange('day')}>Day</button>
      
        <div
          style={{
            width: '200px',
            height: '80px',
            backgroundColor: time === 'day' ? 'blue' : 'black',
          }}
        >
          
        </div>
      </div>
    );
  }


export default App;
