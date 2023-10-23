import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/Register";


import Todo from "./pages/Todo";
import Phonebook from "./pages/PhoneBook";
import Student from "./pages/Student";

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
  {
    path: "student",
    element: <Student />,

  },
]);
   
      
    
    


  export {router};