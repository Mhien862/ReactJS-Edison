/* eslint-disable react-refresh/only-export-components */

import { useEffect, useState } from "react";
import style from './App.module.css'
import { AppContainer } from "./style";
import Image from './assets/react.svg';



function App() {

  const [time, setTime] = useState(null);

  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 5000);

    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
    
      {time ? (
        <p>Thời gian hiện tại sau 5 giây: {time}</p>
      ) : (
        <p>Đang đợi...</p>
      )}
    </div>
  );
}


   

  

export default App;
