import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Properties from './pages/Properties.jsx'
import Application from './pages/Application.jsx'
import Documents from './pages/Documents.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/contact',
        element: <ContactUs />
      }, {
        path: '/properties',
        element: <Properties />
      }, {
        path: '/application',
        element: <Application />
      }, {
        path: '/documents',
        element: <Documents />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
