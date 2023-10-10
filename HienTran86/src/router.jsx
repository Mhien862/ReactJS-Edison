import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/Register";

import PostDetail from "./pages/PostDetail";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Register",
    element: <Register />,

  },
]);
   
      
    
    


  export {router};