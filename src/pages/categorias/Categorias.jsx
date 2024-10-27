import React from 'react'
import NavCategoria from '../../components/navCategoria/NavCategoria'
import Divider from '@mui/material/Divider';
import { Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';



const Categorias = () => {

  

   

  return (
    <div>
        <NavCategoria/>
        <Divider/>
        <Button elementvariant="contained">CARRINHO</Button>
        <Outlet/>
       
    </div>
  )
}

export default Categorias