    import React from 'react'
    import style from './produto.module.css'
    import AddCircleIcon from '@mui/icons-material/AddCircle';
    

    const Produto = (props) => {
        return (

            <article className={style.produto} >

                <div>
                    <img src={props.img} alt={props.time} />
                </div>
                <div className={style.descricao} >
                    <div>
                        <h4>{props.time}</h4>
                        <AddCircleIcon sx={{ fontSize: 34 }}/>
                    </div>
                    <p>tem xx desse produto no estoque</p>
                </div>

            </article>
        )
    }

    export default Produto