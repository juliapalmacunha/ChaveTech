import NavCategoria from '../../components/navCategoria/NavCategoria'
import Divider from '@mui/material/Divider';
import { Outlet } from 'react-router-dom';
import Carrinho from '../../features/carrinho/Carrinho';






const Categorias = () => {




  return (
    <div>
      <NavCategoria />
      <Divider />
      <Outlet />
    </div>
  )
}

export default Categorias