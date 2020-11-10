import React, { Component } from 'react'
import Home from './Home'
import Header from './Header'
import CriacaoDeServicos from './CriacaoDeServicos'
import Servicos from './servicos/Servicos'
import Footer from './Footer'
import styled from 'styled-components'

const ContainerRenderiza = styled.div`
 position:relative;
 margin-bottom: 80px;
`

export class AppContainer extends Component {

  state = {
    paginaSelecionada: "home"
  }

  onClickVoltar = () => {
    this.setState({paginaSelecionada: "home"})
  }

  onClickCriarServico = () => {
    this.setState({paginaSelecionada: "criacaodeservicos"})
  }

  onClickServicos = () => {
    this.setState({paginaSelecionada: "servicos"})
  }

  render() {

    const renderizaNaTela = () => {

      switch (this.state.paginaSelecionada) {
        case "home":
          return <Home 
            abrirServico={this.onClickServicos}
            abrirCriacaoDeServicos={this.onClickCriarServico}
          />
        case "servicos":
          return <Servicos 
            voltar={this.onClickVoltar}
          />
        case "criacaodeservicos":
          return <CriacaoDeServicos 
            voltar={this.onClickVoltar}
          />
      }
    }

    return (
      <div>
          <Header 
          onClickCriarServico={this.onClickCriarServico} 
          onClickServicos={this.onClickServicos}
          onClickHome={this.onClickVoltar}/>
          <ContainerRenderiza>{renderizaNaTela()}</ContainerRenderiza>
          <Footer />
      </div>
    )

  }
}
