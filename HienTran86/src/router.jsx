import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/Register";

import PostDetail from "./pages/PostDetail";
import Post from "./pages/Post";
import Todo from "./pages/Todo";
import Phonebook from "./pages/PhoneBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Register",
    element: <Register />,

  },
  {
    path: "todo",
    element: <Todo />,

  },
  {
    path: "phone",
    element: <Phonebook />,

  },
]);
   
      
    
    


  export {router};