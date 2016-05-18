import React, { Component } from 'react'
// import { QueueAnim } from 'antd'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import 'normalize.css'
import 'antd/dist/antd.css'
import '../common/layout.less'

class App extends Component {
  render () {
    return (<div>
      <Header current={'home'}/>
      <Main>
        {this.props.children}
      </Main>
      <Footer />
    </div>)
  }
}

export default connect(state => ({

}))(App)