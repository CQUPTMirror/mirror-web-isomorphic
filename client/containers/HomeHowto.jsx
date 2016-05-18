/**
 * Created at 16/3/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import hljs from 'highlight.js';
import React, { Component } from 'react';
import { Menu, QueueAnim, Icon, Row, Col, Spin } from 'antd';
// import { Link } from 'react-router';
import { getMirrorsHowTo } from '../../server/services/get-state';

import 'highlight.js/styles/solarized-light.css';
import '../common/github.less';
import HomeNav from '../components/HomeNav';

export default class HomePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      current: null, // current sub page
      mirrorHtmlList: [], //array object
      mirrorNameList: [] // array string
    };
  }

  componentWillMount () {
    getMirrorsHowTo().then(howTo => {
      const data = howTo.data;
      this.setState({
        ...this.state,
        current: data['fileKeys'][0],
        mirrorHtmlList: data['fileHtmls'],
        mirrorNameList: data['fileKeys']
      });
    }).catch(e => {
      console.log('err: ', e);
    });
  }
  componentDidUpdate () {
    if (this.state.current !== this.props.params.name) {
      this.setState({
        ...this.state,
        current: this.props.params.name
      });
    }
  }
  componentDidMount (props) {
    this.setState({
      ...this.state,
      current: this.props.params.name
    });
  }

  getMarkedHtml (mirrorName) {
    return {__html: this.state.mirrorHtmlList[mirrorName] || ''};
  }

  renderHljs (mirrorName) {
    const hljsDoms = document.querySelectorAll(`#hljs-${mirrorName} pre code`);
    for (let i = 0, len = hljsDoms.length; i < len; i ++) {
      hljs.highlightBlock(hljsDoms[i]);
    }
  }

  render() {
    if (0 === this.state.mirrorHtmlList.length) {
      return (<div className="spin-wrapper">
        <Spin />
        <h2>加载中...</h2>
      </div>);
    }

    const mirrorName = this.state.current;
    setTimeout(() => {
      this.renderHljs(mirrorName);
    }, 0);
    return (<Row>
      <Col className="home-left">
        <HomeNav mirrorNameList={this.state.mirrorNameList} current={'mirror-howto-' + this.state.current} />
      </Col>
      <Col className="home-right">
        <section className="marked"
             id={`hljs-${mirrorName}`}
             key={mirrorName}
             dangerouslySetInnerHTML={this.getMarkedHtml(mirrorName)}
        />
      </Col>
    </Row>);
  }
}
