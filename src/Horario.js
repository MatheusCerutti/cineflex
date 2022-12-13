import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Horario(props) {

    const parametros = useParams()
    const [horarios, setHorarios] = useState([])

    const horas = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${parametros.filmeId}/showtimes`)
    horas.then(resposta => {
        setHorarios(resposta.data.days)
        props.setImagem(resposta.data.posterURL)
        props.setEscolhido(resposta.data.title)
    
    })
    



    return (
        <div>
            <Cabecalho>Selecione o Horario</Cabecalho>
            <Corpo>
                {horarios.map(dia => (

                    <div key={dia.id}>
                        <Data>{dia.weekday} - {dia.date}</Data>
                        <Disponivel>
                            {dia.showtimes.map(sessoes => (
                                <Link to={`/assentos/${sessoes.id}`}>
                                    <Sessao>{sessoes.name}</Sessao>
                                </Link>
                            ))}
                        </Disponivel>
                    </div>

                ))}
            </Corpo>
            <Rodape>
                <Imagem>
                    <img src={props.urlimagem}></img>
                </Imagem>
                <Nomefilme>{props.filmeescolhido}</Nomefilme>
            </Rodape>

        </div>

    )
}

const Imagem = styled.div`
width:64px;
height: 89px;
background: #FFFFFF;
box-sizing: border-box;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display:flex;
justify-content: center;
align-items: center;
margin-right: 14px;
img{
    width:48px;
    height:72px;
}
`
const Nomefilme= styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
`

const Rodape = styled.div`
height:117px;
background: #DFE6ED;
box-sizing: border-box;
border: 1px solid #9EADBA;
display:flex;
position:fixed;
bottom:0;
width:100%;
align-items: center;
padding-left: 10px;
`

const Corpo = styled.div`
margin-left: 24px;
`

const Cabecalho = styled.div`
height:110px;
display:flex;
justify-content: center;
align-items: center;
color:#293845;
font-family: Roboto;
font-size: 24px;`

const Data = styled.div`
font-family:Roboto;
font-size:20px;
line-height: 23px;
color: #293845;
margin-bottom: 22px;
`

const Sessao = styled.div`
background-color:#E8833A;
width:83px;
height:43px;
box-sizing: border-box;
border-radius:3px;
display:flex;
justify-content:center;
align-items:center;
margin-right:9px;
margin-bottom: 23px;
color: #FFFFFF;
`

const Disponivel = styled.div`
display:flex;
a{
    text-decoration: none;
}
`

