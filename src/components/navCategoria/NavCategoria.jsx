import React from 'react'
import style from './navCategoria.module.css'


const NavCategoria = () => {

    const categorias = [
        "Letras",
        "Times",
        "Abridores"
    ]

  return (
    <nav className={style.nomesCategorias} >

        {categorias.map((categoria) => {
            return <div>{categoria}</div>
        })}
    
    </nav>

  )
}

export default NavCategoria