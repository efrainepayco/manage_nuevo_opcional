import React, {Component} from 'react'
import {BreadcrumbItem} from 'reactstrap'

export default class Header extends Component {
	render() {
		return (
      <header className="app-header navbar">
        <a className="navbar-brand" href=""></a>
        <ul className="nav navbar-nav  ml-3 hidden-xs">
          <BreadcrumbItem className="ml-3" active>
            <a href="/dashboard">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a>Ruta</a>
          </BreadcrumbItem>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item d-md-down-none">
            Administrador
          </li>
          <li className="d-md-down-none p-0 mr-2 ml-2 font-xs">●</li>
          <li className="nav-item d-md-down-none">
            <a>Cerrar sesión</a>
          </li>
        </ul>
      </header>
    )
	}
}
