/**
 * Created at 16/3/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react';
import { Spin } from 'antd';
import Echarts from '../components/Echarts'
import { fetchServerStateIfNeeded } from '../actions/serverState'
import { connect } from 'react-redux'

class HomeStatusPage extends Component {
  // 这里只做异步加载
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchServerStateIfNeeded(this.props))
  }


  render() {
    const { server } = this.props
    if ( !server || !server.loaded ) {
      return (<div>
        <h1>数据加载中 <Spin /></h1>
      </div>)
    }

    const { serverData, serverConfig } = server
    const trafficDays = serverData.traffic.days.slice(0, 7).reverse()
    const dayOpt = {
      title: {
        text: '流量'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['上行', '下行']
      },
      label: {
        normal: {
          formatter: '{c}GB'
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
          type : 'category',
          boundaryGap : false,
          data : trafficDays.map(d => `${d.date.month}月${d.date.day}日`)
        }],
      yAxis: [{ type : 'value' }],
      series: [{
          name:'上行',
          type:'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data: trafficDays.map(d => (d.tx / 1048576).toFixed(2))
        }, {
          name:'下行',
          type:'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data: trafficDays.map(d => (d.rx / 1048576).toFixed(2))
        }
      ]
    }
    return (<div>

      <Echarts
        option={dayOpt}
        style={{height: '300px', margin: '15px 0 35px'}}
      />
    </div>);
  }
}

export default connect(
  state => ({
    server: state.server
  })
)(HomeStatusPage)
