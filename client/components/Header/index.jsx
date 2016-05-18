/**
 * Created at 16/5/17.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'
import './header.less'

import logo from './logo.png'

export default class Header extends Component {
  static defaultProps = {
    current: 'home'
  }
  
  render () {
    return <header id="header" className="clearfix">
      <div className="logo">
        <img src={logo} />
      </div>
      <h2>重庆邮电大学 · 镜像源</h2>
      <Menu mode="horizontal"
            selectedKeys={[this.props.current]}
      >
        <Menu.Item key="home">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="events">
          <Link to="/events">事件通告</Link>
        </Menu.Item>
        <Menu.Item key="wiki">
          <a href="//wiki.mirror.cqupt.edu.cn/">Wiki</a>
        </Menu.Item>
      </Menu>
    </header>;
  }
}