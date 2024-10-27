import React from 'react'
import CaixaCategoria from '../../components/caixaCategoria/CaixaCategoria'
import Produto from '../../components/produto/Produto'
import { v4 as uuidv4 } from 'uuid';

const Times = () => {

  const times = [
    {
      time: "Flamengo",
      url: "/imagens/Flamengo.png"
    },
    {
      time: "Fluminense",
      url: "/imagens/Fluminense.png"
    },
    {
      time: "Bota Fogo",
      url: "/imagens/BotaFogo.png"
    },
    {
      time: "Vasco",
      url: "/imagens/Vasco.png"
    },
    {
      time: "São Paulo",
      url: "/imagens/SaoPaulo.png"
    },
    {
      time: "Corinthians",
      url: "/imagens/Corinthians.png"
    },
    {
      time: "Palmeiras",
      url: "/imagens/Palmeiras.png"
    },
    {
      time: "Santos",
      url: "/imagens/Santos.png"
    },
    {
      time: "Santa Cruz",
      url: "/imagens/santacruz.png"
    },
    {
      time: "Sport",
      url: "/imagens/sport.png"
    },
    {
      time: "CAM",
      url: "/imagens/cam.png"
    },
    {
      time: "Nautico",
      url: "/imagens/Nautico.png"
    },
    {
      time: "Gremio",
      url: "/imagens/Gremio.png"
    },
    {
      time: "Cruzeiro",
      url: "/imagens/cruzeiro.png"
    },
    {
      time: "Inter",
      url: "/imagens/Inter.png"
    }
  ]


  


  return (
    <>
        <CaixaCategoria>
         {times.map((time) => {
            const idTime = uuidv4()
            return <Produto key={idTime} img={time.url} time={time.time} />
         })}  
        
        </CaixaCategoria>
    </>
  )
}

export default Times