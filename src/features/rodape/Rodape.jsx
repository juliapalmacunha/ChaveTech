import React from 'react'
import { Box , Typography} from '@mui/material'

const Rodape = ({children}) => {
  return (
    
    <Box  
    sx={{
      backgroundColor: "#001E27",
      width: '100%',
      height:"70px",
      color: 'white',
      display:"flex",
      textAlign: 'center',
    }}
    >
     <Typography
      variant='h2'
      fontSize="20px"
      sx={{
        margin:"auto",
        fontFamily:"Lato",
        fontWeight:"bold"
      }}>
        {children}
      </Typography>
    </Box>
  )
}

export default Rodape