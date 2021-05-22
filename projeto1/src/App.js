import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

function App(props) {

    const modificarNome = e =>{
      console.log(e.target.value)
    }
    const criaComboBox = () => {
    const opcoes = ["fulano", "cicrano"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)
    return(
      
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
    const MeuComboBox = () => criaComboBox()
    return(
      <>
      <input type ="text" className="text-centralizado" value = {props.nome} onChange={modificarNome} ></input>
      <h1> Hello {props.nome} sua idadade é {props.idade} </h1>
      <MeuComboBox />
      </>
    )
  }

export default App;
