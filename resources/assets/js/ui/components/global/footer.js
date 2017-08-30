import React, {Component} from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        ePayco &copy; 2012 - {new Date().getFullYear()}
        todos los derechos reservados. {/* <span className="float-right"> <a href="https://genesisui.com">Terminos y condiciones</a></span> */}
        {/* <span className="float-right"> <a href="https://genesisui.com"> Politicas de privacidad</a> &nbsp; | &nbsp;</span> */}
      </footer>
    )
  }
}
