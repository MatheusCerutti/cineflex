import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Assentos(){

    const parametros = useParams()
    const [assentos, setAssentos] = useState([])
    const [selecionados,setSelecionados] = useState([])
    const [nome,setNome] = useState("")
    const [cpf,setCPF] = useState("")

    const poltrona = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${parametros.assentoId}/seats`)
    poltrona.then(resposta => setAssentos(resposta.data.seats))


    return(
        <div>
            <Cabecalho>Selecione o(s) assento(s)</Cabecalho>
            <Corpo>
            <Sala>
            {assentos.map(cadeira => (
                    
                        <Lugares key={cadeira.id} onClick={() => selecionarAssento(cadeira.id,cadeira.isAvailable)} background={cadeira.isAvailable ? selecionados.includes(cadeira.id):"#FBE192"}>
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
            <Dados onSubmit={mandarDados}>
            <Info>
                <Nome htmlFor='name'>Nome do Comprador:</Nome>
                <input id='name' name="Nome" type="text" placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)} required></input>
            </Info>
            <Info>
            <CPF htmlFor='cpf'>CPF do Comprador:</CPF>
            <input id='cpf' name="CPF" type="number" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCPF(e.target.value)} required></input>
            </Info>
            <Link to="/sucesso">
            <Botao>Reservar assento(s)</Botao>
            </Link>
            </Dados>
           
            </div>
    )

    function selecionarAssento(id,disponivel){
        if(disponivel){
            let array = [...selecionados]

            if (array.includes(id)){
                
    
            }else{
                array.push(id)
                setSelecionados(array)
            }
        } else {
            alert("Cadeira indisponível");
        }

       
    }

    function mandarDados(e){
        e.preventDefault()
        const dados = {ids:selecionados,name:nome,cpf}
        console.log(dados)

        //const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",dados)

    }
}

const Dados = styled.form`
display:flex;
flex-direction:column;
align-items: center;
`

const Info = styled.div`
display:flex;
flex-direction: column;
margin-bottom: 8px;
input{
    margin-top: 2px;
    width:327px;
    height:51px;
    box-sizing: border-box;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    ::placeholder{
        font-family: Roboto;
        font-size: 18px;
        font-style: italic;
        color:#AFAFAF;
    }

}
`
const Nome = styled.label`
`

const CPF = styled.label`

`

const Botao = styled.button`
margin-top: 50px;
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
margin-bottom: 41px;
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
background-color: ${props=>props.background=="#FBE192" ? "#FBE192": (props.background ?  "#1AAE9E" : "#C3CFD9")};
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
