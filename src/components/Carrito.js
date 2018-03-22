import React from 'react'
import { formatPrice } from '../helpers'

class Carrito extends React.Component{

  renderCarrito = key => {

    const flor = this.props.flores[key];
    const count = this.props.carrito[key];
    const hayDisponible = flor && flor.estado === "disponible";

    if(!flor) return null

    if(!hayDisponible) {
      return <li key={key}  >Lo sentimos {flor ? flor.nombre:"flor"}  no esta disponible por el  momento</li>
    }
    return(
      <li  key={key}>
        {count} Arreglo {flor.nombre} 
        {formatPrice(count * flor.precio)}
        <button  onClick={ () =>  this.props.removerDelCarrito(key)} >Eliminar pedido</button>
      </li>
    )
  }


  render(){

    const itemIds = Object.keys(this.props.carrito)
    const total = itemIds.reduce((prevTotal, key) =>{

      const flor = this.props.flores[key];
      const count = this.props.carrito[key];
      const hayDisponible = flor && flor.estado === "disponible";

      if(hayDisponible){
        return prevTotal + (count*flor.precio)
      }
      return prevTotal;
    }, 0)

    return(

      <div className="carrito-ctn">
        <h2>Carrito de Compras</h2>
        <ul className="poductos-lista" >{itemIds.map(this.renderCarrito)}</ul>
        <div className="carrito-total">
          Total
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>

    )

  }

}


export default Carrito