import React, {Component} from 'react'

export default class Simple extends Component {
  render() {
    return (
      <div className="login">
        {this.props.children}
      </div>
    )
  }
}
