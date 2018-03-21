import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Navbar from './Navbar'
import Admin from './Admin'
import cargaFlores from '../dataFlores'
import Flor from './Flor'
import Carrito from './Carrito'

class App extends Component {

  goAdmin = event => {

    //1. direccionando a la pagina del admin
    this.props.history.push(`/admin/login`)

  }

  state = {

    flores: {},
    carrito: {}
  } 

  agregarFlor = flor => {
    //  Tomamos una copia del estado actual existente
    const flores = { ...this.state.fishes };
    // Agregamos una nueva flor  a la variable flores
    
    flores[`flor${Date.now()}`] = flor;

    // Agregando una nueva flor al estado
    this.setState({ flores })

  }

  cargarFlores = () => {
    this.setState({ flores:cargaFlores  })
  }

agregarCarrito = (key) => {
  //toam copia del estado
   const carrito = { ...this.state.carrito }
  //agregar la orden o incrementar el numero de pedidos
  carrito[key] = carrito[key] + 1 || 1;
  //actualizando el estado
  this.setState({ carrito })
}

  render() {
    return (
      <div className="wancho" >
      <Admin  cargarFlores={this.cargarFlores}  agregarFlor = {this.agregarFlor}  />
        <Navbar  goAdmin={this.goAdmin}  /> 
        <Carrito flores={this.state.flores} carrito={this.state.carrito} />
        <Header />
        <ul className="flor-cnt" >
        {Object.keys(this.state.flores).map(key => (
          
          <Flor agregarCarrito={this.agregarCarrito} index={key} key={key} detalle={this.state.flores[key]} />
          
        )) }
        </ul> 
      </div>
    );
  }
}

export default App;
