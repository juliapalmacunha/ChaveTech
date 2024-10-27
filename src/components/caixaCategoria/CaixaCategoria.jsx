import React from 'react'
import { Box } from '@mui/material'

const CaixaCategoria = ({ children }) => {

 

  return (

    <Box sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      {children}
    </Box>

  )
}

export default CaixaCategoria