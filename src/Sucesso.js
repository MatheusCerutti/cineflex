import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function Sucesso(props) {

    const navigate = useNavigate()

    return (
        <div>
            <Cabecalho>Pedido feito com sucesso!</Cabecalho>
            <Esquerda>
                <div  data-test="movie-info">
                    <Titulo>Filme e sessão</Titulo>
                    <Info>{props.filmeescolhido}</Info>
                    <Info>{props.dataescolhida} {props.horarioescolhido}</Info>
                </div>
                <div data-test="seats-info">
                    <Titulo>Ingressos</Titulo>
                    {props.assentoescolhido.map(choice => <Info>Assento {choice}</Info>)}
                </div>
                <div data-test="client-info">
                    <Titulo>Comprador</Titulo>
                    <Info>Nome: {props.comprador}</Info>
                    <Info>CPF: {props.cpfcomprador}</Info>
                </div>
            </Esquerda>
            <Centro>
                <Botao data-test="go-home-btn" onClick={() => voltarHome()}>Voltar pra Home</Botao>
            </Centro>

        </div>
    )

    function voltarHome() {
        props.setData("")
        props.setHorario("")
        props.setAssentosescolhidos([])
        props.setComprador("")
        props.setCPFCom("")
        props.setImagem("")
        props.setEscolhido("")

        navigate("/")
    }
}

const Botao = styled.button`
margin-top: 60px;
width:225px;
height:42px;
background-color: #E8833A;
border-radius: 3px;
color:#FFFFFF;
font-family: 'Roboto', sans-serif;
font-size: 18px;
`

const Centro = styled.div`
display:flex;
justify-content: center;
`

const Esquerda = styled.div`
padding-left:28px;
`

const Cabecalho = styled.div`
margin-top:67px;
height:110px;
display:flex;
justify-content: center;
align-items: center;
font-weight: 700;
color:#247A6B;
font-family: 'Roboto', sans-serif;
font-size: 24px;`

const Titulo = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 24px;
line-height: 28px;
margin-bottom:10px;
margin-top:50px;

`
const Info = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 22px;
line-height: 26px;
margin-bottom: 5px;
`