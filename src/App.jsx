import './App.css'
import Welcome from './sections/Welcome'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/welcome",
    element: <Welcome /> 
  }
])
function App() {

  return <RouterProvider router={router} />
}

export default App
