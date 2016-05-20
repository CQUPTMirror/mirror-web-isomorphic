/**
 * Created at 16/3/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import hljs from 'highlight.js';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Spin } from 'antd';
import 'highlight.js/styles/solarized-light.css';
import '../common/github.less';

class HomeGuidePage extends Component {

  getMarkedHtml (guideName) {
    const { guides } = this.props
    for (let g of guides) {
      if (g.universalName === guideName) {
        return {__html: g.parsedMarkdown};
      }
    }
    return {__html: ''};
  }

  renderHljs () {
    const { params: { guideName }} = this.props
    const hljsDoms = document.querySelectorAll(`#hljs-${guideName} pre code`);
    for (let i = 0, len = hljsDoms.length; i < len; i ++) {
      hljs.highlightBlock(hljsDoms[i])
    }
  }

  componentDidMount () {
    this.renderHljs()
  }
  componentDidUpdate () {
    this.renderHljs()
  }

  render() {
    const { loaded } = this.props
    if (!loaded) {
      return (<div className="spin-wrapper">
        <Spin />
        <h2>加载中...</h2>
      </div>);
    }

    const { params: { guideName }} = this.props
    return (<section className="marked"
                     id={`hljs-${guideName}`}
                     key={guideName}
                     dangerouslySetInnerHTML={this.getMarkedHtml(guideName)}
    />);
  }
}

export default connect(
  state => ({
    guides: state.mirror.guides,
    loaded: state.mirror.loaded
  })
)(HomeGuidePage)
