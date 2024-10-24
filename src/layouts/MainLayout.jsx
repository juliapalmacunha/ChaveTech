import React, { useState } from 'react'
import Header from '../features/header/Header';
import DrawerMenu from '../features/drawer/DrawerMenu';
import Rodape from '../features/rodape/Rodape';


const MainLayout = ({children}) => {

    const [estadoGaveta, setEstadoGaveta] = useState(false)

    const alternarGaveta = () => {
        setEstadoGaveta(!estadoGaveta)
    }


  return (
    <div>

        <DrawerMenu alternarGaveta={alternarGaveta} estadoGaveta={estadoGaveta}/>
        <Header alternarGaveta={alternarGaveta} />
        <main>{children}</main>
        <Rodape/>

    </div>
  )
}

export default MainLayout