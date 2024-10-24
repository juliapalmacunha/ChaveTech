 // Adicione useState aqui
import style from './header.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; 

const Header = ({alternarGaveta}) => {
  
  return (
    <header className={style.header}>
      <AppBar position="static">
        <Toolbar className={style.cabecalho}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={alternarGaveta}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6">
            Jr Chaveiros
          </Typography>
        </Toolbar>

      </AppBar>
    </header>
  );
};

export default Header;
