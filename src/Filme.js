import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Titulo() {

    const [itens, SetItens] = useState([])

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        requisicao.then(resposta => SetItens(resposta.data))
    },[])

    console.log(itens)
    return (
        <div>
            <Cabecalho>Selecione o Filme</Cabecalho>
            <Lista>
                {itens.map(image => (
                    <Link to={`/sessoes/${image.id}`}>
                        <Posters data-test="movie">
                            <Imagem src={image.posterURL} alt={image.title}></Imagem>
                        </Posters>
                    </Link>
                ))}
            </Lista>
        </div>
    )
}

const Cabecalho = styled.div`
margin-top:67px;
height:110px;
display:flex;
justify-content: center;
align-items: center;
color:#293845;
font-family: 'Roboto', sans-serif;
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
margin: 11px 19px;
`

const Lista = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
`

const Imagem = styled.img`
width:129px;
height:193px;
`