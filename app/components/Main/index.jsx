/**
 * Created at 16/3/18.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react';

import './main.less'
export default class Main extends Component {
  render() {
    return (<div className="main-wrapper">{this.props.children}</div>);
  }
}
