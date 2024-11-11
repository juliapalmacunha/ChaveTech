
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const Header = ({ alternarGaveta, alternarCart }) => {

  return (
    <Box>
      <AppBar position="static">


        <Toolbar sx={{ backgroundColor: "#043b71", display: "flex", justifyContent: "space-between" }}>

          <Box sx={{ display: 'flex', alignItems: "center" }}>
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
          </Box>

          <Box sx={{ display: 'flex', alignItems: "center" }}>
            <IconButton  onClick={alternarCart}>
              <ShoppingCartIcon
                sx={{ color: 'white', ":hover": {
                  color: "#eaeaea"
                } }}            
              />
            </IconButton>
            <IconButton>
              <HomeIcon sx={{ color: 'white' }}/>
            </IconButton>
          </Box>

        </Toolbar>



      </AppBar>




    </Box>
  );
};

export default Header;
