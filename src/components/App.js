import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Admin from './Admin'
import cargaFlores from '../dataFlores'
import Flor from './Flor'
import Carrito from './Carrito'
import base from "../base"

class App extends Component {

  state = {

    flores: {},
    carrito: {}
  } 


  componentDidMount(){

    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.tiendaId)

    if(localStorageRef) {
    
          this.setState({  carrito: JSON.parse(localStorageRef) })  // localStorageReaf es un string con JSON parse lo convierto en objeto
    
        }


      // const { params } = this.props.match;
      this.ref = base.syncState( `${params.tiendaId}/flores`, {
        context:this,
        state:'flores'
      } )
    }
    

  componentDidUpdate(){

    localStorage.setItem(this.props.match.params.tiendaId, JSON.stringify(this.state.carrito)) // Conviero this.state.carrito en un un string porque lo interpreta como un objeto
    console.log(this.state.carrito)
    console.log(JSON.stringify(this.state.carrito))
    
  }

  componentWillUnmount(){
    
    base.removeBinding(this.ref)

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

  eliminarFlor = (key) => {
    // copia del estado
    const flores = { ...this.state.flores }
    //elimino flor
    flores[key] = null
    //actualizo el estado
    this.setState({  flores })
  }

  actualizaFlor = (key, actualizadaFlor) =>{
    //tomo copia del estado
    const flores = {  ...this.state.flores}
    // Actualizo el estado
    flores[key] = actualizadaFlor;
    //Coloco el estado
    this.setState({ flores })

  }

  agregarCarrito = (key) => {
    //toam copia del estado
    const carrito = { ...this.state.carrito }
    //agregar la orden o incrementar el numero de pedidos
    carrito[key] = carrito[key] + 1 || 1;
    //actualizando el estado
    this.setState({ carrito })
  }


  removerDelCarrito = (key) => {

    const carrito = { ...this.state.carrito }

    delete carrito[key]

    this.setState({ carrito })
  } 

  render() {
    return (
      <div className="wancho" >
        <Admin  
            cargarFlores={this.cargarFlores}  
            agregarFlor = {this.agregarFlor}
            eliminarFlor = {this.eliminarFlor}
            actualizaFlor = {this.actualizaFlor}
            flores = {this.state.flores}
         />
        <Carrito 
            flores={this.state.flores} 
            carrito={this.state.carrito}
            removerDelCarrito = {this.removerDelCarrito}
        />
        <Header nombre={this.props.match.params.tiendaId} />
        <ul className="flor-cnt" >
        {Object.keys(this.state.flores).map(key => (
          
          <Flor 
              agregarCarrito={this.agregarCarrito} 
              index={key} key={key} 
              detalle={this.state.flores[key]}
           />
          
        )) }
        </ul> 
      </div>
    );
  }
}

export default App;
