/**
 * Created at 16/3/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react';
import { Row, Col, Table, Icon } from 'antd';

import HomeNav from '../components/HomeNav';

export default class HomePage extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }



  render() {

    return (<Row>
      <Col className="home-left">
        <HomeNav current="mirror-status"/>
      </Col>
      <Col className="home-right">
        <h1>服务器感觉挺好的</h1>
      </Col>
    </Row>);
  }
}
