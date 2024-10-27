import React from 'react'
import style from './navCategoria.module.css'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


const NavCategoria = () => {

  const categorias = [
    "Letras",
    "times",
    "Abridores"
  ]

  return (
    <nav className={style.nomesCategorias} >

      {categorias.map((categoria) => {
        return <Link key={uuidv4()} to={`/categorias/${categoria.toLocaleLowerCase()}`}>
          {categoria}
        </Link>
      })}

    </nav>

  )
}

export default NavCategoria