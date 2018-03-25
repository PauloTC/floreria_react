import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers'

class EditFlorForm extends React.Component{


  static propTypes = {
    flor : PropTypes.shape({
      imagen : PropTypes.string,
      nombre : PropTypes.string,
      estado : PropTypes.string,
      precio : PropTypes.number
    }),
    index : PropTypes.string,
    actualizaFlor : PropTypes.func,
    eliminarFlor : PropTypes.func

  }

  handleChange = (event) => {

    const actualizaFlor = {

      ...this.props.flor,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.actualizaFlor(this.props.index, actualizaFlor)
  }


  render() {

    return(

      <div className="FormAddItem">
        <input type="text"  value={this.props.flor.nombre} onChange={this.handleChange}  name="nombre" />
        <input type="text"  value=  { formatPrice(this.props.flor.precio) } onChange={this.handleChange}  name="precio" />
        <select  value= {this.props.flor.estado} onChange={this.handleChange}  name="estado" >
          <option value="disponible">Disponible</option>
          <option value="nodisponible">Agotado</option>          
        </select>
        <input type="text"  value={this.props.flor.imagen} onChange={this.handleChange}  name="imagen" />
        <button onClick={ () => this.props.eliminarFlor(this.props.index) } >Eliminar </button>
      </div>

    )

  }
}

export default EditFlorForm