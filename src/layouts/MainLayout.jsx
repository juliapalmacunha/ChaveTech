import React, { useState } from 'react'
import Header from '../features/header/Header';
import DrawerMenu from '../features/drawer/DrawerMenu';
import Rodape from '../features/rodape/Rodape';

import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Carrinho from '../features/carrinho/Carrinho';


const MainLayout = ({ children }) => {

  //manipulando o drawer principal
  const [estadoGaveta, setEstadoGaveta] = useState(false)
  const alternarGaveta = () => {
    setEstadoGaveta(!estadoGaveta)
  }

  //manipulando abertura do carrinho
  const [estadoCart, setEstadoCart] = useState(false)
  const alternarCart = () => {
    setEstadoCart(!estadoCart)
  } 
  




  return (

    <Box
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      <DrawerMenu alternarGaveta={alternarGaveta} estadoGaveta={estadoGaveta} />
      <Header alternarGaveta={alternarGaveta} alternarCart={alternarCart}/>
      <Box sx={{ flex: "1" }} >{children}</Box>
      <Carrinho alternarCart={alternarCart} estadoCart={estadoCart} />

      <Rodape>
        <p>Site Jr</p>
      </Rodape>

    </Box>
  )
}

export default MainLayout