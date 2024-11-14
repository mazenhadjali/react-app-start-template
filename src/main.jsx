import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/index.css'
import App from 'src/App.jsx'
import { Provider } from 'react-redux'
import store from 'src/store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { APITEST, DASHBOARD, HOME, LOGIN, OVERVIEW, PROFILE } from 'src/routingpaths.js'
import Login from 'src/pages/login/index.jsx'
import NotFoundPage from './pages/notfound'
import './i18n/index.js'
import Dashboard from './dashboard'
import Overview from './pages/dashboard/overview'
import ApiTestPage from './pages/apitest'
import ToastProvider from './toast/ToastProvider'

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Provider store={store}><App /> </Provider>,
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: APITEST,
    element: <ApiTestPage />,
  },
  {
    path: DASHBOARD,
    element: <Dashboard />,
    children: [
      {
        path: OVERVIEW,
        element: <Overview />,
      },
      {
        path: PROFILE,
        element: <h1>profile page</h1>,
      },

      // adding sub routes here for dashboard page layout...

    ],
  },

  {
    path: '*',
    element: <NotFoundPage />,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  </StrictMode>,
)
