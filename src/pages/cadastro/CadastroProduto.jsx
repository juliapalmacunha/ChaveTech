import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const CadastroProduto = () => {

 

  return (
    < >


      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgcolor="#FFFFF"
        p={2}
        flexDirection="column"
      >
        <Box
          name='box'
          component="form"
          width="100%"
          maxWidth="800px"
          marginBottom="150px"
          p={3}
          bgcolor="white"
          boxShadow={3}
          borderRadius={4}
          zIndex="1"
          display="flex"
          flexDirection="row"
          gap={2}
        >
          <Box width="50%" display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Nome"
              name="name"
              variant="outlined"
              fullWidth
              size='small'

            />
            <TextField
              label="Telefone"
              name="telefone"
              variant="outlined"
              fullWidth
              size='small'
             

            />
            <TextField
              label="Cidade"
              name="cidade"
              variant="outlined"
              fullWidth
              size='small'
              
            />
            

            <Button
              variant="contained"
              sx={{ backgroundColor: "#043b71" , mt: 2, fontFamily: 'Be Vietnam Pro, sans-serif', textDecoration: 'none' }}
              type="submit"
            >
              Enviar
            </Button>
            
          </Box>
        
        </Box>

      </Box>





    </>
  )
}

export default CadastroProduto