import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import AllProjects from './AllProjects'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/projects",
    element: <AllProjects /> 
  }
])
function App() {

  return <RouterProvider router={router} />
}

export default App
