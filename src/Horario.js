import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Horario() {

    const parametros = useParams()
    const [horarios, setHorarios] = useState([])

    const horas = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${parametros.filmeId}/showtimes`)
    horas.then(resposta => setHorarios(resposta.data.days))


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
                                    <Sessao key={sessoes.id}>{sessoes.name}</Sessao>
                                </Link>
                            ))}
                        </Disponivel>
                    </div>

                ))}
            </Corpo>

        </div>

    )
}

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

