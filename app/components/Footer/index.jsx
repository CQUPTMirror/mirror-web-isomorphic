/**
 * Created at 16/3/18.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react';
import { Col, Row } from 'antd';

import './footer.less';

export default class Footer extends Component {
  render () {
    return (<footer id="footer">
      <Row className="footer-content">
        <Col span="6" style={{padding: '5px 2% 15px'}}>
          <h2>Github</h2>
          <a target="_blank" href="https://github.com/CQUPTMirror">仓库</a>
        </Col>
        <Col span="6" style={{padding: '5px 2% 15px'}}>
          <h2>关于我们</h2>
          <a target="_blank" href="##">MirrorTeam</a>
        </Col>
        <Col span="6" style={{padding: '5px 2% 15px'}}>
          <h2>联系我们</h2>
          <a target="_blank" href="https://github.com/CQUPTMirror/BugReport/issues">Bug 反馈</a>
          <a target="_blank" href="mailto://zhengjie@redrock-team.com">Email</a>
          <a target="_blank" href="https://www.telegram.me/zfox49">Telegram</a>
        </Col>
        <Col span="6" style={{padding: '5px 2% 15px'}}>
          <div style={{marginTop: '15px'}}>红岩网校工作站 & Linux 协会</div>
          <div style={{marginTop: '5px'}}>重庆邮电大学信息中心技术支持</div>
        </Col>
      </Row>
    </footer>);
  }
}
