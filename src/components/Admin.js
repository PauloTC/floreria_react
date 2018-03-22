import React from 'react'
import AddFlorForm from './AddFlorForm'
import EditFlorForm from './EditFlorForm'



class Admin  extends React.Component {

  render(){
    return(
      <div className="AdminWrap">
        <h2>Agregar productos</h2>
        <div className="AdminWrapFlor">
          { Object.keys(this.props.flores).map( key => (
            <EditFlorForm   
              index={key}  
              key={key} 
              flor={this.props.flores[key]} 
              actualizaFlor={this.props.actualizaFlor}
              eliminarFlor = {this.props.eliminarFlor}
            />
          ))}
        </div>
        <AddFlorForm    agregarFlor = {this.props.agregarFlor}    />
        <button  onClick={ this.props.cargarFlores }  >Cargar Flores</button>
      </div>

    )


  }


}

export default Admin
