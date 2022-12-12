import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Titulo(){

    const [itens,SetItens] = useState([])

    useEffect(()=>{
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        requisicao.then(resposta => SetItens(resposta.data))
    })

    console.log(itens)
    return (
        <div>
        <Cabecalho>Selecione o Filme</Cabecalho>
        <Lista>
        {itens.map(image=>(
            <Posters key={image.id}>
                <Imagem src={image.posterURL} alt={image.title}></Imagem>
            </Posters>
        ))}
        </Lista>
        </div>
    )
}

const Cabecalho = styled.div`
height:110px;
display:flex;
justify-content: center;
align-items: center;
color:#293845;
font-family: Roboto;
font-size: 24px;`

const Posters = styled.div`
width:145px;
height:209px;
display:flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
border-radius: 3px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
background: #FFFFFF;
margin-right:30px;
margin-top:11px;
`

const Lista =styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
`

const Imagem = styled.img`
width:129px;
height:193px;
`