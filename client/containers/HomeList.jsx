/**
 * Created at 16/3/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react'
import { Row, Col, Spin, Table, Icon, Tag } from 'antd'
import moment from 'moment'
import { getState } from '../../server/services/get-state'
import HomeNav from '../components/HomeNav'

moment.locale('zh-cn');
const columns = [{
  title: 'Name',
  dataIndex: 'mirrorName',
  key: 'mirrorName',
  render (name, record, index) {
    if (record['link']) {
      return <h2><a href={"//" + record.link} target="_blank">{name}</a></h2>;
    }
    return <h2>{name}</h2>;
  }
}, {
  title: 'Storage',
  dataIndex: 'storage',
  key: 'storage'
}, {
  title: 'Last Update',
  dataIndex: 'lastUpdate',
  key: 'lastUpdate',
  render (ts) {
    return <span>{0 === ts ? "从未" : moment(ts * 1000).calendar()}</span>;
  }
}];

export default class HomePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataLoaded: false,
      data: []
    };
  }

  componentWillMount () {
    getState().then(state => {
      const mirrorsArray = state.data['mirror_list'];
      this.setState({
        dataLoaded: true,
        data: mirrorsArray.filter((cell, index) => {
          cell['key'] = index; // add key for react.id
          return cell;
        })
      });
    }).catch(e => {
      console.error('error in getting state', e);
    });
  }

  render() {

    return (<Row>
      <Col className="home-left">
        <HomeNav current="mirror-list"/>
      </Col>
      <Col className="home-right">
        <Table columns={columns} dataSource={this.state.data} pagination={false} loading={!this.state.dataLoaded}/>
      </Col>
    </Row>);
  }
}
