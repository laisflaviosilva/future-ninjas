import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const AreaHome = styled.div`
    width: 100vw;
    height: 38vh;
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    grid-gap: 0px 0px;
`
const H2 = styled.h2`
    font-size: 40px;
    font-family: helvetica'';
   /* margin: 45px 0 0 25px;*/
   display: grid;
    grid-column: 2/3;
    font-weight: lighter;
    align-items: center;
`

const H4 = styled.h4`
    font-weight: lighter;
    font-size: 16px;
    font-family: 'helvetica';
    display: grid;
    grid-column: 2/4;
    grid-row: 2/4;

`

const ButtonHeader = styled.button`
    height: 80px;
    width: 400px;
    font-size: 1.2em;
    font-weight: bold;
    align-items: center;    
    background-color: #FF7F50;
    color: #2B2D2F;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline:none;
    :hover{
        background-color: #F83F2C;
        color: #FFF;
    }
    display: grid;
    grid-column: 4/5;
    grid-row: 1/3;
    padding: 4px;
    align-self: center;
`

class Home extends React.Component {

    state = {
        
    }

    render () {


        return (
            <div>
                <AreaHome>
                    <H2>O jeito mais esperto de	contratar um serviço!</H2>
                    <H4>Fale o que precisa, receba orçamentos e escolha o melhor.</H4>
                    <ButtonHeader onClick={this.props.abrirServico}>QUERO UM PROFISSIONAL AGORA!</ButtonHeader>
                </AreaHome>
                <hr />
                <AreaHome>
                    <H2>Você é profissional?</H2>
                    <H4>Venha, faça seu anúncio gratuito e amplie seus negócios e sua atuação no mercado.</H4>
                    <ButtonHeader onClick={this.props.abrirCriacaoDeServicos}>CADASTRAR MEUS SERVIÇOS!</ButtonHeader>
                </AreaHome>
            </div>
        )
    }
}

export default Home