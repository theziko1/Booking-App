import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import List from './pages/List';
import Hotel from './pages/Hotel';
import Login from './pages/Login';


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/hotels", element: <List/>},
    { path: "/hotels/:id", element: <Hotel/>},
    { path: "/login", element: <Login/>},
      
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
