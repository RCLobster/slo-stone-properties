import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import NotFound from './pages/NotFound.jsx'
import Admin from './pages/admin/Admin.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Application from './pages/Application.jsx'
import Documents from './pages/Documents.jsx'
import Patricia214 from './pages/properties/Patricia214.jsx'
import Patricia226 from './pages/properties/Patricia226.jsx'
import Craig205 from './pages/properties/Craig205.jsx'
import Patricia242 from './pages/properties/Patricia242.jsx'

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
        path: '/admin',
        element: <Admin />
      }, {
        path: '/admin/login',
        element: <AdminLogin />
      }, {
        path: '/contact',
        element: <ContactUs />
      }, {
        path: '/application',
        element: <Application />
      }, {
        path: '/documents',
        element: <Documents />
      }, {
        path: '/patricia214',
        element: <Patricia214 />
      }, {
        path: '/patricia226',
        element: <Patricia226 />
      }, {
        path: '/craig205',
        element: <Craig205 />
      }, {
        path: '/patricia242',
        element: <Patricia242 />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
