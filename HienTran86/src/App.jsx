/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";
import style from './App.module.css'
import { AppContainer } from "./style";
import Image from './assets/react.svg';

// eslint-disable-next-line no-unused-vars
function App() {
  
    // Bước 2: Khai báo state time và giá trị mặc định là 'day'
    const [time, setTime] = useState('day');
  
    // Bước 3: Khai báo hàm onClick cho mỗi button để cập nhật state time
    const handleTimeChange = (newTime) => {
      setTime(newTime);
    };
  
    return (
      <div className="App">
        <button onClick={() => handleTimeChange('night')}>Night</button>
        <button onClick={() => handleTimeChange('day')}>Day</button>
        {/* Bước 4: Tạo phần tử div thay đổi màu theo state time */}
        <div
          style={{
            width: '200px',
            height: '80px',
            backgroundColor: time === 'day' ? 'blue' : 'black',
          }}
        >
          {/* Nội dung bên trong div */}
        </div>
      </div>
    );
  }


export default App;
