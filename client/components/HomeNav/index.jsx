/**
 * Created at 16/3/22.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React from 'react';
import { Menu, QueueAnim, Icon, Row, Col, Spin } from 'antd';
const { SubMenu } = Menu;
import { Link } from 'react-router';
import { getState, getMirrorsHowTo } from '../../../server/services/get-state';

// current 指示 Home 页面状态
// mirror-list 镜像列表
// mirror-howto-xxx 镜像说明
// mirror-status 服务器状态
export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current: this.props.current || 'mirror-list',
      mirrorNameList: this.props.mirrorNameList || []
    };
    if (!this.props.mirrorNameList) {
      getMirrorsHowTo().then(howTo => {
        const data = howTo.data;
        this.setState({
          ...this.state,
          mirrorNameList: data['fileKeys']
        });
      }).catch(e => {
        console.log('err: ', e);
      });
    }

  }

  componentDidUpdate () {
    if (this.state.current !== this.props.current) {
      this.setState({
        ...this.state,
        current: this.props.current
      });
    }
  }

  render () {
    if (0 === this.state.mirrorNameList.length) {
      return <Icon type="loading" />;
    }
    return (<Menu className="menu"
                  defaultOpenKeys={['mirror-howto']}
                  selectedKeys={[this.state.current]}
                  mode="inline">
      <Menu.Item key="mirror-list">
        <Link to="/">
          <Icon type="bars" />镜像列表</Link>
      </Menu.Item>
      <SubMenu key="mirror-howto"
               title={<span>
                 <Icon type="info-circle-o" />
                 <span>使用说明</span>
               </span>}
      >
        {
          this.state.mirrorNameList.map(name => {
            return <Menu.Item key={`mirror-howto-${name}`}><Link to={`/howto/${name}`}>{name}</Link></Menu.Item>;
          })
        }
      </SubMenu>
      <Menu.Item key="mirror-status">
        <Link to="/status">
          <Icon type="hdd" />服务器状态</Link>
      </Menu.Item>
    </Menu>);
  }
}
