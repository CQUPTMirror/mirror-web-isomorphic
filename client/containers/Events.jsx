/**
 * Created at 16/3/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';

import Timeline from '../components/Timeline';

export default class EventsPage extends Component {
  render() {
    return (<Row className="page-events">
      <Col offset="4">
        <h2># 维护通知</h2>
        <Timeline />
      </Col>
    </Row>);
  }
}
