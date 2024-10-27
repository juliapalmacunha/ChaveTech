
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; 
import { Box } from '@mui/material';

const Header = ({alternarGaveta}) => {
  
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor:"#043b71"}}>
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
    </Box>
  );
};

export default Header;
