
import CaixaCategoria from '../../components/caixaCategoria/CaixaCategoria'
import Produto from '../../components/produto/Produto'
import { v4 as uuidv4 } from 'uuid';


const Times = () => {

  

  



  const times = [
    {
      time: "Flamengo",
      url: "/imagens/Flamengo.png",
      preco: 5
    },
    {
      time: "Fluminense",
      url: "/imagens/Fluminense.png",
      preco: 5
    },
    {
      time: "Bota Fogo",
      url: "/imagens/BotaFogo.png",
      preco: 5
    },
    {
      time: "Vasco",
      url: "/imagens/Vasco.png",
      preco: 5
    },
    {
      time: "São Paulo",
      url: "/imagens/SaoPaulo.png",
      preco: 5
    },
    {
      time: "Corinthians",
      url: "/imagens/Corinthians.png",
      preco: 5
    },
    {
      time: "Palmeiras",
      url: "/imagens/Palmeiras.png",
      preco: 5
    },
    {
      time: "Santos",
      url: "/imagens/Santos.png",
      preco: 5
    },
    {
      time: "Santa Cruz",
      url: "/imagens/santacruz.png",
      preco: 5
    },
    {
      time: "Sport",
      url: "/imagens/sport.png",
      preco: 5
    },
    {
      time: "CAM",
      url: "/imagens/cam.png",
      preco: 5
    },
    {
      time: "Nautico",
      url: "/imagens/Nautico.png",
      preco: 5
    },
    {
      time: "Gremio",
      url: "/imagens/Gremio.png",
      preco: 5
    },
    {
      time: "Cruzeiro",
      url: "/imagens/cruzeiro.png",
      preco: 5
    },
    {
      time: "Inter",
      url: "/imagens/Inter.png",
      preco: 5
    }
  ]


  return (
    <>
    
        <CaixaCategoria>
         {times.map((time) => {
            const idTime = uuidv4()
            return <Produto 
            key={idTime} 
            id={idTime} 
            img={time.url} 
            time={time.time}
            preco={time.preco}
            url={time.url} />
         })}  

         

         
        
        </CaixaCategoria>
    </>
  )
}

export default Times