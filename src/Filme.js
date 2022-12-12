import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Titulo(){

    const [itens,SetItens] = useState([])

    useEffect(()=>{
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        requisicao.then(resposta => SetItens(resposta.data.itens))
    })

    console.log(itens)
    return (
        <div>
        <Cabecalho>Selecione o Filme</Cabecalho>
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