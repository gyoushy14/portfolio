import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import { ProjectsPage, NotFoundPage } from './pages/lazyPages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, errorElement: <ErrorPage /> },
      { path: 'projects', element: <ProjectsPage />, errorElement: <ErrorPage /> },
      { path: '*', element: <NotFoundPage />, errorElement: <ErrorPage /> },
    ],
  },
])

export default router