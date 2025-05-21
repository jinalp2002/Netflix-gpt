
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: '',
    },
    {
      path: '/browse',
      element: 'Browse'
    },
  ]);
  return (
    <div>
      <RouterProvider router={Router}/>
      <Login />
      <Browse />
    </div>
  )
}

export default Body;
