import React from 'react'
import Proptypes from 'prop-types'

class Header extends React.Component {

    render(){
      return(
        <header className="Header" >
          <div className="wancho">
              <h1>{this.props.nombre}</h1>
          </div>
        </header>
      )
    }
}


Header.proptypes = {
  nombre: Proptypes.string.isRequired
}


export default Header