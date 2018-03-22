import React from 'react'

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

export default Header