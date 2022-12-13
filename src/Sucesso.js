import styled from 'styled-components'

export default function Sucesso(props){
    return (
        <div>
        <Cabecalho>Pedido feito com sucesso!</Cabecalho>
        <Titulo>Filme e sessão</Titulo>
        <Info>{props.filmeescolhido}</Info>
        <Info>{props.dataescolhida} {props.horarioescolhido}</Info>
        <Titulo>Ingressos</Titulo>
        {props.assentoescolhido.map(assent => (<Info>Assento {assent}</Info>))}
        <Titulo>Comprador</Titulo>
        <Info>Nome:{props.comprador}</Info>
        <Info>CPF:{props.cpfcomprador}</Info>

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

const Titulo = styled.div`
font-family: Roboto;
font-weight: 700;
font-size: 24px;
line-height: 28px;

`
const Info = styled.div`
font-family: Roboto;
font-weight: 400;
font-size: 22px;
line-height: 26px;
`