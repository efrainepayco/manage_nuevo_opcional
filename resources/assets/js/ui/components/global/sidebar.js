import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Sidebar extends Component {
  handleClick(e) {
    e.preventDefault()
    e.target.parentElement.classList.toggle('open')
  }

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to="https://dashboard.epayco.co/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="https://dashboard.epayco.co/tarjetas" className="nav-link">Mis Tarjeta</Link>
            </li>
            <li className="nav-item">
              <Link to="https://dashboard.epayco.co/paga" className="nav-link">Paga</Link>
            </li>
            <li className="nav-item">
              <Link to="https://dashboard.epayco.co/cobra" className="nav-link">Cobra/Vender</Link>
            </li>
            <li className="nav-item">
              <Link to="https://dashboard.epayco.co/cobrofacturas" className="nav-link">Recaudo</Link>
            </li>
            <li className="nav-item">
              <Link to="/clients" className="nav-link">Clientes</Link>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link recharge nav-dropdown-toggle pointer" onClick={this.handleClick.bind(this)}>
                Subscripciones
              </a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to="/subscriptions" className="nav-link">Subscripciones</Link>
                </li>
                <li className="nav-item">
                  <Link to="/plans" className="nav-link">Planes</Link>
                </li>
                <li className="nav-item">
                  <Link to="/invoices" className="nav-link">Facturas</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="https://dashboard.epayco.co/recarga" className="nav-link">Recarga</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
