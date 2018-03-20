import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Navbar from './Navbar'
import Admin from './Admin'

class App extends Component {

  goAdmin = event => {

    //1. direccionando a la pagina del admin
    this.props.history.push(`/admin/login`)

  }

  state = {

    flores: {}

  } 

  agregarFlor = flor => {
    //  Tomamos una copia del estado actual existente
    const flores = { ...this.state.fishes };
    // Agregamos una nueva flor  a la variable flores
    
    flores[`flor${Date.now()}`] = flor;

    // Agregando una nueva flor al estado
    this.setState({ flores })

  }


  render() {
    return (
      <div className="wancho" >
        <Navbar  goAdmin={this.goAdmin}  /> 
        <Header />
        <section className="flower-container" >
          <div className="flower-item" >
          <img src="" alt="flores"/>
            <h2>Margaritas</h2>
            <p>S/.120</p>
          </div>
          <a href="">Anadir al carrito</a>
        </section>
         <Admin agregarFlor = {this.agregarFlor}  />
      </div>
    );
  }
}

export default App;
