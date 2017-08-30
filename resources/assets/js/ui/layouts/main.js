import React, {Component} from 'react'

//Components
import Header from '../components/global/header'
import Sidebar from '../components/global/sidebar'
import Footer from '../components/global/footer'
import Bread from '../components/global/breadcrumb'

export default class Main extends Component {
  render() {
    const {main} = this.props
    return (
			<div className="app">
        <Header/>
        <div className="app-body">
          <Sidebar/>
          <main className="main">
						<Bread/>
            <div className="container-fluid">
							{main}
            </div>
          </main>
        </div>
        <Footer/>
      </div>
    )
  }
}
