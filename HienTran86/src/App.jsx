/* eslint-disable react-refresh/only-export-components */

import { useEffect, useState } from "react";
import style from './App.module.css'
import { AppContainer } from "./style";
import Image from './assets/react.svg';
import { RouterProvider} from "react-router-dom";
import { router } from "./router";

function App() {

 

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


   

  

export default App;
