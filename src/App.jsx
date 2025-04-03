import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { AppLayout } from './components/Layout/AppLayout';



import './App.css'
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Country } from './pages/Country';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
    {
      path:"/About",
      element:<About/>
    },    
    {
      path:"/Country",
      element:<Country/>
    },
    {
      path:"/Contact",
      element:<Contact/>
    },]

},

])
const App =()=>{
  return <RouterProvider router={router} ></RouterProvider>;
};
export default App;