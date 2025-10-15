import { createBrowserRouter } from "react-router-dom";

import { Home } from "../containers/Home";
import { Login } from '../containers/login';
import { Menu } from "../containers/Menu";
import { Register } from "../containers/Register";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Aqui talvez você queira usar <Home /> como página inicial
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/cardapio',
    element: <Menu />,
  },
  {
    path: '/menu', // <- Adicionada para evitar erro 404
    element: <Menu />,
  },
]);
