import React from 'react'
import { formatPrice } from '../helpers'

class Flor extends  React.Component{



  render() {

    const {imagen, nombre, precio} = this.props.detalle

    return(

     <li className="flor">
      <img height={250} width={250} src={imagen} alt=""/>      
      <h3>{nombre}</h3>
      <span>{ formatPrice(precio) }</span>
      <button>Agregar al Carrito</button>
     </li>

    )

  }

}

export default Flor