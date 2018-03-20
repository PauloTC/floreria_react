import React from 'react'
import AddFlorForm from './AddFlorForm'
class Admin  extends React.Component {

  render(){
    return(
      <div className="wancho">
        <h2>Agregar productos</h2>
        <AddFlorForm    agregarFlor = {this.props.agregarFlor}    />
        <button  onClick={ this.props.cargarFlores }  >Cargar Flores</button>
      </div>

    )


  }


}

export default Admin
