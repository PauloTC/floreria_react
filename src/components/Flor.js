import React from 'react'
import { formatPrice } from '../helpers'

class Flor extends  React.Component{

  handleEvent = () => {

    this.props.agregarCarrito(this.props.index)

  }

  render() {

    const {imagen, nombre, precio, estado} = this.props.detalle
    const hayStock = estado === "disponible" // true

    return(

     <li className="flor">
      <img height={250} width={250} src={imagen} alt=""/>      
      <h3>{nombre}</h3>
      <span>{ formatPrice(precio) }</span>
      <button  onClick={this.handleEvent}  disabled={!hayStock} >{  hayStock ? 'Agregar al Carrito' : 'Agotado' }</button>
     </li>

    )

  }

}

export default Flor