import React from 'react'
import PropTypes from 'prop-types'
import AddFlorForm from './AddFlorForm'
import EditFlorForm from './EditFlorForm'

class Admin  extends React.Component {


  static propTypes = {

    flores : PropTypes.object,
    actualizaFlor : PropTypes.funct,
    eliminarFlor : PropTypes.funct,
    cargarFlores : PropTypes.funct,

  }

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
