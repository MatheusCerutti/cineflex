import styled from 'styled-components'

export default function Titulo(){
    return (
        <Cabecalho>CINEFLIX</Cabecalho>
    )
}

const Cabecalho = styled.div`
height:67px;
display:flex;
justify-content: center;
align-items: center;
color:#E8833A;
background-color: #C3CFD9;
font-family: Roboto;
font-size: 34px;`