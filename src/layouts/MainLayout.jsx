import React, { useState } from 'react'
import Header from '../features/header/Header';
import DrawerMenu from '../features/drawer/DrawerMenu';
import Rodape from '../features/rodape/Rodape';

import { Box } from '@mui/material';


const MainLayout = ({ children }) => {

  const [estadoGaveta, setEstadoGaveta] = useState(false)

  const alternarGaveta = () => {
    setEstadoGaveta(!estadoGaveta)
  }



  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      <DrawerMenu alternarGaveta={alternarGaveta} estadoGaveta={estadoGaveta} />
      <Header alternarGaveta={alternarGaveta} />
      <Box 
      sx={{flex: "1"}} >{children}</Box>
      <Rodape />

    </Box>
  )
}

export default MainLayout