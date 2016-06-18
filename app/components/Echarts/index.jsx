/**
 * Created at 16/6/17.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component } from 'react'
import elementResizeEvent from 'element-resize-event'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

export default class Echarts extends Component {
  static propTypes = {
    option: React.PropTypes.object.isRequired,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    theme: React.PropTypes.string,
    onChartReady: React.PropTypes.func,
    showLoading: React.PropTypes.bool,
    onEvents: React.PropTypes.object
  }

  componentDidMount() {
    const echartObj = this.renderEchartDom();
    const onEvents = this.props.onEvents || [];

    for (let eventName in onEvents) {
      if (typeof eventName === 'string' && typeof onEvents[eventName] === 'function') {
        // binding event
        echartObj.on(eventName, (param) => {
          onEvents[eventName](param, echartObj)
        })
      }
    }
    // on chart ready
    if (typeof this.props.onChartReady === 'function') {
      this.props.onChartReady(echartObj)
    }

    // on resize
    elementResizeEvent(this.refs.echartsDom, () => {
      echartObj.resize()
    })
  }

  componentDidUpdate() {
    this.renderEchartDom()
  }
  // remove
  componentWillUnmount() {
    echarts.dispose(this.refs.echartsDom)
  }
// render the dom
  renderEchartDom() {
    // init the echart object
    const echartObj = this.getEchartsInstance()
    // set the echart option
    echartObj.setOption(this.props.option)

    // set loading mask
    if (this.props.showLoading) {
      echartObj.showLoading()
    } else {
      echartObj.hideLoading()
    }

    return echartObj
  }

  getEchartsInstance() {
    // return the echart object
    return echarts.getInstanceByDom(this.refs.echartsDom) || echarts.init(this.refs.echartsDom, this.props.theme);
  }
  render () {
    const { className, style } = this.props
    return (<section
      style={style}
      className={className}
      ref="echartsDom" />)
  }
}

