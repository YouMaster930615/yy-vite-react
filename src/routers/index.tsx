
import Home from '../views/home';
import Detail from '../views/detail';
import Login from '../views/login';



const routes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/detail',
        element: <Detail />
      }
    ]
  },
]

export default routes;