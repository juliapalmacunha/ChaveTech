import React from 'react'
import style from './caixaCategoria.module.css'

const CaixaCategoria = ({children}) => {



  return (

    <section className={style.caixa} >
        {children}
    </section>
    
  )
}

export default CaixaCategoria