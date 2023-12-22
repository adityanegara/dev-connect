import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, ThemeProvider } from '@emotion/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import Error from './components/pages/Error'
import theme from './theme/styledTheme'
import global from './theme/global'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
