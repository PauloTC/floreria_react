import React from 'react'


class AddFlorForm extends React.Component {


  nombreRef = React.createRef()
  precioRef = React.createRef()
  imagenRef = React.createRef()
  estadoRef = React.createRef()

  crearFlor = (event) => {
    //1. detener el submit
    event.preventDefault()

    // Creo el objeto
    const flor = {
      nombre : this.nombreRef.value.value,
      precio : parseFloat(this.precioRef.value.value), //numero
      imagen : this.imagenRef.value.value,
      estado : this.estadoRef.value.value
    }

    this.props.agregarFlor(flor)
    
    event.currentTarget.reset()
  }


  render () {

    return(
      
      <form  className="FormAddItem" onSubmit={this.crearFlor}  action="">
          <input  name="nombre" ref={this.nombreRef}   placeholder="Nombre"  type="text"/>
          <input  name="precio" ref={this.precioRef}  placeholder="Precio"  type="text"/>
          <input  name="imagen" ref={this.imagenRef}  placeholder="Imagen"  type="text"/>
          <select name="estado" ref={this.estadoRef} >
            <option value="">Disponible</option>
            <option value="">Agotado</option>            
          </select>
          <button>+ Agregar item</button>
        </form>

    )

  }

}

export default AddFlorForm