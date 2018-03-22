import React from 'react'

class EditFishForm extends React.Component{

  handleChange = (event) => {

    const actualizaFlor = {

      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.actualizaFlor(this.props.index, actualizaFlor)
  }


  render() {

    return(

      <div className="flor-editar">
        <input type="text"  value={this.props.flor.nombre} onChange={this.handleChange}  name="nombre" />
        <input type="text"  value={this.props.flor.precio} onChange={this.handleChange}  name="precio" />
        <select  value={this.props.flor.estado} onChange={this.handleChange}  name="estado" >
          <option value="disponible">Disponible</option>
          <option value="nodisponible">Agotado</option>          
        </select>
        <input type="text"  value={this.props.flor.imagen} onChange={this.handleChange}  name="imagen" />
        <button onClick={ () => this.props.eliminarFlor(this.props.index) } >Eliminar </button>
      </div>

    )

  }
}

export default EditFishForm