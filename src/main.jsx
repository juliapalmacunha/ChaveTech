import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import CadastroProduto from './pages/cadastro/CadastroProduto.jsx'
import Categorias from './pages/categorias/Categorias.jsx'
import Clientes from './pages/clientes/Clientes.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Pedidos from './pages/pedidos/Pedidos.jsx'
import Times from './pages/categorias/Times.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'cadastro-produto',
        element: <CadastroProduto/>
      },
      {
        path: 'categorias',
        element: <Categorias/>,
        children: [
          {
            path: "times",
            element: <Times/>
          }
        ]
      },
      {
        path: 'clientes',
        element: <Clientes/>
      },
      {
        path: 'dashboard',
        element: <Dashboard/>
      },
      {
        path: 'pedidos',
        element: <Pedidos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
