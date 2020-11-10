import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardServico from './CardServico'
import Input from '@material-ui/core/TextField'
import Select from '@material-ui/core/NativeSelect'

const ButtonCriacao = styled.button`
    margin: 12.5px;
    height: 40px;
    width: 100px;
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

const Option = styled(Select)`
    color: #737373;
`

const DivFiltro = styled.div`
    margin-left: 35px;
`

class Servicos extends React.Component {

    state = {
        inputValorMaximo: "",
        inputValorMinimo: "",
        inputTitulo: "",
        inputDescricao: "",
        selectOrdem: "",
        listaDeServicos: [],
        listaFiltrada: []
    }

    componentDidMount = () => {
        this.atualizaEstado()
    }

    atualizaEstado = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs',)
        .then((response) => {
        this.setState({listaDeServicos: response.data.jobs, listaFiltrada: response.data.jobs} )
        }).catch((error) => {
        console.log(error.message)
        })
    }

    onChangeValorMaximo = (event) => {
        this.setState({inputValorMaximo: event.target.value})
    }

    onChangeValorMinimo = (event) => {
        this.setState({inputValorMinimo: event.target.value})
    }

    onChangeTitulo = (event) => {
        this.setState({inputTitulo: event.target.value})
    }

    onChangeDescricao = (event) => {
        this.setState({inputDescricao: event.target.value})
    }

    onChangeSelectOrdem = (event) => {
        this.setState({selectOrdem: event.target.value})
    }

    onClickFiltro = () => {

        if (this.state.inputValorMinimo !== "" || this.state.inputValorMaximo !== "") {
            const novaListaFiltrada = this.state.listaDeServicos.filter((servico) => {
                if (this.state.inputValorMinimo !== "" && this.state.inputValorMaximo !== "") {
                    if (Number(servico.value) >= this.state.inputValorMinimo && Number(servico.value) <= this.state.inputValorMaximo) {
                        return true
                    }
                } else if (this.state.inputValorMinimo === "") {
                    if (Number(servico.value) <= this.state.inputValorMaximo) {
                        return true
                    }
                } else if (this.state.inputValorMaximo === "") {
                    if (Number(servico.value) >= this.state.inputValorMinimo) {
                        return true
                    }
                } 
            })
            this.setState({listaFiltrada: novaListaFiltrada, inputValorMinimo: "", inputValorMaximo: ""})
        } else {
            const novaListaFiltrada2 = this.state.listaDeServicos.filter((servico) => {
                return true
            })
            this.setState({listaFiltrada: novaListaFiltrada2})
        } 
        
        if (this.state.inputTitulo !== "" && this.state.inputDescricao === "") {
            const novaListaFiltrada3 = this.state.listaDeServicos.filter((servico) => {
                if (this.state.inputTitulo === servico.title) {
                    return true
                }
            })
            this.setState({listaFiltrada: novaListaFiltrada3, inputTitulo: ""})
        }
        
        if (this.state.inputDescricao !== "" && this.state.inputTitulo === "") {
            const novaListaFiltrada4 = this.state.listaDeServicos.filter((servico) => {
                if (this.state.inputDescricao === servico.description) {
                    return true
                }
            })
            this.setState({listaFiltrada: novaListaFiltrada4, inputDescricao: ""})
        }
    }   

    render () {

        function ordenaTituloAZ(a,b){
            return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
        }
        function ordenaTituloZA(a,b){
            return (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0);
        }

        function ordenaPrecoMenor (a,b){
            return a.value - b.value
        }
        function ordenaPrecoMaior (a,b){
            return b.value - a.value
        }

        function ordenaPrazoMenor (a,b){
            return (a.dueDate > b.dueDate) ? 1 : ((b.dueDate > a.dueDate) ? -1 : 0);
        }
        function ordenaPrazoMaior (a,b){
            return (b.dueDate > a.dueDate) ? 1 : ((a.dueDate > b.dueDate) ? -1 : 0);
        }

        switch(this.state.selectOrdem){
            case 'OrdemAZ':
                this.state.listaDeServicos.sort(ordenaTituloAZ)
                this.state.listaFiltrada.sort(ordenaTituloAZ)
                break;
            case 'OrdemZA':
                this.state.listaDeServicos.sort(ordenaTituloZA)
                this.state.listaFiltrada.sort(ordenaTituloZA)
                break;
            case 'MenorPreco':
                this.state.listaDeServicos.sort(ordenaPrecoMenor)
                this.state.listaFiltrada.sort(ordenaPrecoMenor)
                break;
            case 'MaiorPreco':
                this.state.listaDeServicos.sort(ordenaPrecoMaior)
                this.state.listaFiltrada.sort(ordenaPrecoMaior)
                break;
            case 'MenorPrazo':
                this.state.listaDeServicos.sort(ordenaPrazoMenor)
                this.state.listaFiltrada.sort(ordenaPrazoMenor)
                break;
            case 'MaiorPrazo':
                this.state.listaDeServicos.sort(ordenaPrazoMaior)
                this.state.listaFiltrada.sort(ordenaPrazoMaior)
                break;
            default: ;
        }

        return (
            <div>
                <DivFiltro>
                    <Input
                        label = "Valor Mínimo"
                        onChange={this.onChangeValorMinimo}
                        value={this.state.inputValorMinimo}
                    />
                    <Input
                        label = "Valor Máximo"
                        onChange={this.onChangeValorMaximo}
                        value={this.state.inputValorMaximo}
                    />
                    <Input 
                        label = "Título"
                        onChange={this.onChangeTitulo}
                        value={this.state.inputTitulo}
                    />
                    <Input
                        label = "Descrição"
                        onChange={this.onChangeDescricao}
                        value={this.state.inputDescricao}
                    />
                    <Option onChange={this.onChangeSelectOrdem} value={this.state.selectOrdem}> 
                        <option value="">Ordenar por: </option>
                        <option value="MenorPreco">Menor Preço</option>
                        <option value="MaiorPreco">Maior Preço</option>
                        <option value="OrdemAZ">Ordem alfábetica de A-Z</option>
                        <option value="OrdemZA">Ordem alfabética de Z-A</option>
                        <option value="MenorPrazo">Menor Prazo</option>
                        <option value="MaiorPrazo">Maior Prazo</option>
                    </Option>
                    <ButtonCriacao onClick={this.onClickFiltro}>Filtrar</ButtonCriacao>
                </DivFiltro>
                <div>
                    <CardServico 
                        lista={this.state.listaFiltrada}
                        atualiza={this.atualizaEstado}
                    />
                </div>
                <ButtonCriacao onClick={this.props.voltar}>Voltar</ButtonCriacao>
            </div>
        )
    }

}

export default Servicos