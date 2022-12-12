import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Assentos(){

    const parametros = useParams()
    const [assentos, setAssentos] = useState([])
    const [selecionados,setSelecionados] = useState([])

    const poltrona = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${parametros.assentoId}/seats`)
    poltrona.then(resposta => setAssentos(resposta.data.seats))


    return(
        <div>
            <Cabecalho>Selecione o(s) assento(s)</Cabecalho>
            <Corpo>
            <Sala>
            {assentos.map(cadeira => (
                    
                        <Lugares key={cadeira.id} onClick={() => selecionarAssento(cadeira.id)} background={selecionados.includes(cadeira.id)}>
                            {cadeira.name}
                        </Lugares>
                
                ))}
                
            </Sala>
           
            <Legendas>
                <Caixa>
                <Circulo background="#1AAE9E" bordacor="#0E7D71"></Circulo>
                <Texto>Selecionado</Texto>
                </Caixa>
                <Caixa>
                <Circulo background="#C3CFD9" bordacor="#7B8B99"></Circulo>
                <Texto>Disponível</Texto>
                </Caixa>
                <Caixa>
                <Circulo background="#FBE192" bordacor="#F7C52B"></Circulo>
                <Texto>Indisponível</Texto>
                </Caixa>
            </Legendas>
            </Corpo>
            <Nome>Nome do Comprador:
                <input placeholder="Digite seu nome..."></input>
            </Nome>
            <CPF>CPF do Comprador:
            <input placeholder="Digite seu CPF..."></input>
            </CPF>
            <Botao>Reservar assento(s)</Botao>
           
            </div>
    )

    function selecionarAssento(id){
        let array = [...selecionados]

        if (array.includes(id)){
            

        }else{
            array.push(id)
            setSelecionados(array)
        }
    }
}


const Nome = styled.div`
input{
    ::placeholder{

    }
}
`

const CPF = styled.div`
`

const Botao = styled.button`
width:225px;
height:42px;
background-color: #E8833A;
border-radius: 3px;
color:#FFFFFF;
font-family: Roboto;
font-size: 18px;
`

const Caixa = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;`

const Texto = styled.h1`
margin-top:5px;
font-family:Roboto;
font-size:13px;
line-height:15px;
`

const Circulo = styled.div`
width:24px;
height:24px;
box-sizing: border-box;
border: 1px solid ${props=>props.bordacor};
border-radius: 12px;
background-color:${props=>props.background};
`

const Legendas = styled.div`
width:330px;
display:flex;
justify-content:space-evenly;`

const Corpo = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Cabecalho = styled.div`
height:110px;
display:flex;
justify-content: center;
align-items: center;
color:#293845;
font-family: Roboto;
font-size: 24px;
`

const Sala = styled.div`
display:flex;
flex-wrap: wrap;
width:330px;
`

const Lugares = styled.div`
width:26px;
height:26px;
box-sizing: border-box;
border: 1px solid #808F9D;
background-color: ${props=>props.background ?  "#1AAE9E" : "#C3CFD9"};
border-radius: 12px;
font-family: Roboto;
font-size: 11px;
line-height: 13px;
display:flex;
justify-content: center;
align-items: center;
margin-left: 7px;
margin-bottom:18px;

`
