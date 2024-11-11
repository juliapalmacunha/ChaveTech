
import { useContext } from 'react';
import CartContext from '../../features/carrinho/CartContext'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CartProvider from './CartProvider';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';



const Carrinho = ({ estadoCart, alternarCart }) => {

  const { cartItems } = useContext(CartContext)




  return (


    <React.Fragment>

      <Dialog
        sx={{ '& .MuiPaper-root': { width: '700px', maxWidth: '700px' } }}
        open={estadoCart}
        onClose={alternarCart}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {"Carrinho de pedidos"}
        </DialogTitle>

        <DialogContent>

          <DialogContentText id="alert-dialog-description">
            {cartItems.map((produto) => {
              return <Box
                sx={{
                  width: "645px",
                  height: "100px",
                  border: "2px solid black",
                  display: "flex",
                  margin: "8px 0 8px 0",
                  padding: "6px 6px 6px 6px",
                  borderRadius: "15px",
                  justifyContent: "space-between",
                  fontFamily: 'Poppins',
                  fontWeight: "600",
                  color: "black",
                  "& > *" : {
                    display: "flex"
                  }
                }}
              >
                <Box>
                  <img src={produto.url} alt="" />
                  <p>{produto.nome} </p>
                </Box>


                

                <Box sx={{
                  width: "350px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  "& > *": {
                    margin: "0 12px 0 6px"
                  }
                }}>
                  <p>{produto.quantidade}</p>
                  <p>{produto.preco} </p>
                  <DeleteIcon/>
                </Box>

              </Box>
            })}


          </DialogContentText>

        </DialogContent>
        <DialogActions>

          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>


        </DialogActions>
      </Dialog>
    </React.Fragment>


  )
}

export default Carrinho



