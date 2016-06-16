/**
 * Created at 16/3/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react'
import { Table } from 'antd'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class HomeListPage extends Component {

  render() {
    const { loaded, mirrorState } = this.props
    const dataSource = mirrorState && mirrorState.map((cell, idx) => ({ ...cell, key: idx}))
    return (<Table dataSource={dataSource}
                   pagination={false}
                   loading={!loaded}
                   columns={[{
            title: 'Mirror Name',
            dataIndex: 'universalName',
            key: 'mirrorName',
            render (name, record) {
              if (record['mirrorUrl']) {
                return <h2><a href={record.mirrorUrl} target="_blank">{name}</a></h2>;
              }
              return <h2>{name}</h2>;
            }
          }, {
            title: 'Guide',
            dataIndex: 'guideUrl',
            key: 'guide',
            render (guideUrl) {
              return guideUrl ? <Link to={guideUrl}>Click</Link> : '-'
            }
          }/*, {
            title: 'Last Update',
            dataIndex: 'lastUpdate',
            key: 'lastUpdate',
            render (timestamp) {
              return <span>{!timestamp ? "-" : moment(+timestamp).format('YYYY-MM-DD HH:mm')}</span>;
            }
          }*/
        ]} />);
  }
}

export default connect(
  state => ({
    loaded: state.mirror.loaded,
    success: state.mirror.success,
    mirrorState: state.mirror.mirrorState
  })
)(HomeListPage)
