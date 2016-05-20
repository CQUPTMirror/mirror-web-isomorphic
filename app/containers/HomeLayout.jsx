/**
 * Created at 16/3/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import HomeNav from '../components/HomeNav'

const currentMap = {
  '/': 'mirrorState',
  '/server': 'server'
}
class HomeLayout extends Component {

  render() {
    const { loaded, guides, location: { pathname }, params: { guideName } } = this.props
    let current = 'mirrorState'
    if (pathname === '/') {
      current = 'mirrorState'
    } else if (pathname.match(/\/guide\//)) {
      current = `guide-${guideName}`
    } else if (pathname === '/server') {
      current = 'server'
    }
    return (<Row>
      <Col className="home-left">
        <HomeNav current={current} loaded={loaded} guides={guides} />
      </Col>
      <Col className="home-right">
        {this.props.children}
      </Col>
    </Row>)
  }
}

export default connect(state => {
  return {
    loaded: state.mirror.loaded,
    success: state.mirror.success,
    guides: state.mirror.guides
  }
})(HomeLayout)
