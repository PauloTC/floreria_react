import React from 'react'
import AddFlorForm from './AddFlorForm'
import EditFlorForm from './EditFlorForm'



class Admin  extends React.Component {

  render(){
    return(
      <div className="wancho">
        <h2>Agregar productos</h2>
        { Object.keys(this.props.flores).map( key => (
          <EditFlorForm   
            index={key}  
            key={key} 
            flor={this.props.flores[key]} 
            actualizaFlor={this.props.actualizaFlor}
            eliminarFlor = {this.props.eliminarFlor}
           />
        ) ) }
        <AddFlorForm    agregarFlor = {this.props.agregarFlor}    />
        <button  onClick={ this.props.cargarFlores }  >Cargar Flores</button>
      </div>

    )


  }


}

export default Admin
