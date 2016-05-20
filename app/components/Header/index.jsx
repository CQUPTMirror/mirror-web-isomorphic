/**
 * Created at 16/5/17.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component, PropTypes} from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'
import './header.less'
import logo from './logo.png'

const MenuItem = Menu.Item

export default class Header extends Component {
  static propTypes = {
    current: PropTypes.string.isRequired
  }
  
  render () {
    const { current } = this.props

    return <header id="header" className="clearfix">
      <div className="logo">
        <img src={logo} />
      </div>
      <h2>重庆邮电大学 · 镜像源</h2>
      <Menu mode="horizontal" selectedKeys={[current]}>
        <MenuItem key="home">
          <Link to="/">首页</Link>
        </MenuItem>
        <MenuItem key="events">
          <Link to="/events">事件通告</Link>
        </MenuItem>
      </Menu>
    </header>;
  }
}