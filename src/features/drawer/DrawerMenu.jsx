import React from 'react'
import {Link} from 'react-router-dom'
import Drawer from '@mui/material/Drawer'; 
import Divider from '@mui/material/Divider'; 
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon'; 
import ListItemText from '@mui/material/ListItemText'; 
import HomeIcon from '@mui/icons-material/Home'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import HowToRegIcon from '@mui/icons-material/HowToReg'; 
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import BarChartIcon from '@mui/icons-material/BarChart'; 
import DeleteIcon from '@mui/icons-material/Delete'; 

const DrawerMenu = ({alternarGaveta, estadoGaveta}) => {

  return (
    <nav>


        <Drawer
          anchor="left"
          open={estadoGaveta}
          onClose={alternarGaveta}
        >
          <div style={{ width: 250 }}>
            <h2 style={{ color: 'black', textAlign: 'center', fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight:'100', color: '#A8A8A8', marginBottom:'30px', marginTop:'40px' }}>Menu</h2>
            <Divider />

            <ListItemButton onClick={alternarGaveta} component={Link} to='/'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home"  />
            </ListItemButton>


            <ListItemButton onClick={alternarGaveta} component={Link} to='cadastro-produto' >
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Cadastrar" />
            </ListItemButton>

            <ListItemButton onClick={alternarGaveta} >
              <ListItemIcon>
                <HowToRegIcon />
              </ListItemIcon>
              <ListItemText primary="Clientes" component={Link} to='clientes' />
            </ListItemButton>

            <ListItemButton onClick={alternarGaveta} component={Link} to='pedidos'>
              <ListItemIcon>
                <ContentPasteIcon />
              </ListItemIcon>
              <ListItemText primary="Pedidos" />
            </ListItemButton>

            <ListItemButton onClick={alternarGaveta} component={Link} to='dashboard' >
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard"  />
            </ListItemButton>

            <ListItemButton onClick={alternarGaveta} >
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Lixeira" />
            </ListItemButton>

            <ListItemButton onClick={alternarGaveta} component={Link} to="/categorias" >
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Categorias de produtos" />
            </ListItemButton>
          </div>
        </Drawer>
    </nav>
  )
}

export default DrawerMenu