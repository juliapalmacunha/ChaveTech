import React, { useState } from 'react';
import style from './produto.module.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Grid2 } from '@mui/material';
import { useContext } from 'react';
import CartContext from '../../features/carrinho/CartContext';

const Produto = (props) => {

  const { addItemToCart } = useContext(CartContext);
  const [onclick, setOnClick] = useState(false);

  const handleAddToCart = (nome, preco, url) => {

    addItemToCart(nome, preco, url);
    setOnClick(true);
    setTimeout(() => setOnClick(false), 195);  

  };



  return (
    <Grid2
      xs={12} sm={4}
      className={style.produto}
      sx={{
        margin: '32px 16px',
        width: '280px',
        height: '320px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
        backgroundColor: 'white',
      }}
    >
      <Box>
        <Box>
          <img
            src={props.img}
            alt={props.time}
            sx={{
              paddingTop: "12px"
            }}
          />
        </Box>

        <Box className={style.descricao}>
          <div>
            <h4>{props.time}</h4>
            
            <AddCircleIcon
              sx={{
                fontSize: 34,
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform: onclick ? 'scale(1.2)' : 'scale(1)', 
                opacity: onclick ? 0.7 : 1
              }}
              onClick={() => { handleAddToCart(props.time, props.preco, props.url) }} 
            />
          </div>
          <p>tem xx desse produto no estoque</p>
        </Box>
      </Box>
    </Grid2>
  );
};

export default Produto;
