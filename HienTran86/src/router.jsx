import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/home",
        element: <div>Hello Hien!</div>,
      },
  ]);

  export {router};