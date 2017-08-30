import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Login</h2>
				<Link to='/dashboard'>Dashboard</Link>
      </div>
    )
  }
}
