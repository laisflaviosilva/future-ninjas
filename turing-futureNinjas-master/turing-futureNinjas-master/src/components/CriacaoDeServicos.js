import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CheckBox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'


const ContainerInputs = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    margin: 8px auto;
`
const ContainerButtons = styled.div`
    width: 10vw;
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
`
const StyledTextField = styled(TextField)`
    width: 30vw;
`
const ContainerServicos = styled.div`
    border: 1px solid black;
    width: 50vw;
    padding: 16px;
    margin: 16px auto;
    border-radius: 20px;
`
export const ButtonCriacao = styled.button`
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
class CriacaoDeServicos extends React.Component {

    state = {
        inputTitulo: "",
        inputDescricao: "",
        inputValorDaRemuneracao: "",
        inputPrazo: "",
        metodosPag: []
    }

    onChangeInputTitulo = (event) => {
        this.setState({inputTitulo: event.target.value})
    }

    onChangeInputDescricao = (event) => {
        this.setState({inputDescricao: event.target.value})
    }

    onChangeInputValorDaRemuneracao = (event) => {
        this.setState({inputValorDaRemuneracao: event.target.value})
    }

    onChangeInputPrazo = (event) => {
        this.setState({inputPrazo: event.target.value})
    }

    onChangeChecked = (event) => {
       let metodosPag = [...this.state.metodosPag, event.target.id]
        if(this.state.metodosPag.includes(event.target.id)){
            metodosPag = metodosPag.filter(metodo => metodo !== event.target.id)
        }
        this.setState({
            metodosPag: metodosPag
        })
        
    }

    cadastroServico = () => {
        const body = {
            "title": this.state.inputTitulo,
            "description": this.state.inputDescricao,
            "value": this.state.inputValorDaRemuneracao,
            "paymentMethods": this.state.metodosPag,
            "dueDate": this.state.inputPrazo
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs', body).then(
            alert("Serviço cadastrado com sucesso!"),
            this.setState({inputTitulo: "", inputDescricao: "", inputValorDaRemuneracao: "", inputPrazo: "", metodosPag: []})
        ).catch(err => {
            console.log(err)
        })
    }

    render () {
        console.log(this.state.metodosPag)
        return (
            <ContainerServicos>
                <ContainerInputs>
                    <StyledTextField
                        required
                        label='Título' 
                        onChange={this.onChangeInputTitulo}
                        value={this.state.inputTitulo}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <StyledTextField 
                        required
                        label='Descrição'
                        onChange={this.onChangeInputDescricao}
                        value={this.state.inputDescricao}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <StyledTextField 
                        required
                        label='Valor da Remuneração'
                        onChange={this.onChangeInputValorDaRemuneracao}
                        value={this.state.inputValorDaRemuneracao}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <StyledTextField 
                        required
                        label='Prazo'
                        onChange={this.onChangeInputPrazo}
                        value={this.state.inputPrazo}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <FormControl>
                    <FormLabel component="legend">Formas de Pagamento</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                        control={
                            <CheckBox color="primary" type="checkbox" id="Transferência Bancária" value="Transferência Bancária" onChange={this.onChangeChecked}/> 
                        }
                        label="Transferência Bancária"
                        />
                        <FormControlLabel
                        control={
                            <CheckBox color="primary" type="checkbox" id="Cartão de débito" value="Cartão de débito" onChange={this.onChangeChecked}/>
                        }
                        label="Cartão de débito"
                        />
                        <FormControlLabel
                        control={
                            <CheckBox color="primary" type="checkbox" id="Cartão de crédito" value="Cartão de crédito" onChange={this.onChangeChecked}/>
                        }
                        label="Cartão de Crédito"
                        />
                        <FormControlLabel
                        control={
                            <CheckBox color="primary" type="checkbox" id="Dinheiro" value="Dinheiro" onChange={this.onChangeChecked}/>
                        }
                        label="Dinheiro"
                        />
                        <FormControlLabel
                        control={
                            <CheckBox color="primary" type="checkbox" id="Boleto" value="Boleto" onChange={this.onChangeChecked}/>
                        }
                        label="Cartão de Crédito"
                        />
                    </FormGroup>
                    </FormControl>
                </ContainerInputs>
                <ContainerButtons>
                    <ButtonCriacao onClick={this.cadastroServico}>Cadastrar</ButtonCriacao>
                    <ButtonCriacao onClick={this.props.voltar}>Voltar</ButtonCriacao>
                </ContainerButtons>
            </ContainerServicos>
        )
    }
}

export default CriacaoDeServicos