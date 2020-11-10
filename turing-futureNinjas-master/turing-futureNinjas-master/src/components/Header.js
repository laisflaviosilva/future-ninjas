import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const H1Header = styled.h1`
    margin: 0;
    padding: 0;
    font-family: Andale Mono, monospace;
    cursor: pointer;
`

const ContainerHeader = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding: 8px;
    align-items: center;
    padding: 0 32px;
`

export const ButtonHeader = styled.button`
    margin: 16px;
    height: 40px;
    width: 200px;
    background-color: black;
    color: #FFF;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    outline:none;
    :hover{
        background-color: #FFEA52;
        color: #474117;
    }
`

class Servicos extends React.Component {
    render () {
        return (
            <ContainerHeader>
                <H1Header onClick={this.props.onClickHome}>Future Ninjas</H1Header>
                <div>
                    <ButtonHeader onClick={this.props.onClickServicos}>PROCURE SERVIÇOS!</ButtonHeader>
                    <ButtonHeader onClick={this.props.onClickCriarServico}>SEJA UM PROFISSIONAL!</ButtonHeader>
                </div>
                
            </ContainerHeader>
        )
    }
}

export default Servicos