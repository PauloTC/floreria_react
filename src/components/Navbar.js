import React from 'react'

class Navbar extends React.Component {


  render(){

    return(

        <nav className="Navbar" >
            <li>
              <button onClick={this.props.goAdmin} >Login</button>
            </li>
        </nav>

    )

  }

}

export default Navbar