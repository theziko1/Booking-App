import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import List from './pages/List';
import Hotel from './pages/Hotel';


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/hotels", element: <List/>},
    { path: "/hotels/:id", element: <Hotel/>},
      
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
