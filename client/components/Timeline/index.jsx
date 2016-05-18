import React from 'react';
import { Timeline } from 'antd';
const TimelineItem = Timeline.Item;
export default class extends React.Component {
  render () {
    return (<Timeline pending={<p>项目启动: 2016年3月</p>}>

      <TimelineItem color="green">
        <p>网络恢复 2016-03-29 21:56</p>
      </TimelineItem>
      <TimelineItem color="red">
        <p>网络故障 2016-03-29 20:35</p>
      </TimelineItem>
    </Timeline>);
  }
}
