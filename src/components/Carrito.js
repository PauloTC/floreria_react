import React from 'react'
import { formatPrice } from '../helpers'
import { TransitionGroup, CSSTransition } from "react-transition-group"

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
      <TransitionGroup  component="span" className="count"  >
          <CSSTransition  
              classNames="count" 
              key={key}
              timeout = {{  enter:500, exit:500  }} 
              >
                <span>{count}</span>
            </CSSTransition>
        </TransitionGroup>
           Arreglo {flor.nombre} 
          <span className="CarritoPrecio" >
            {formatPrice(count * flor.precio)}
          </span>
          <button  onClick={ () =>  this.props.removerDelCarrito(key)} >&times;</button>
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

      <div className="CarritoWrap">
        <h2>Carrito de Compras</h2>
        <ul className="CarritoListaProductos" >{itemIds.map(this.renderCarrito)}</ul>
        <div className="CarritoTotal">
          Total
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>

    )

  }

}


export default Carrito