/**
 * Created at 16/5/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import { connect } from 'react-redux'
import Events from '../components/Events'

const MOCK_DATA = [{
  type: 'error',
  event: '服务器挂了',
  time: 1463713158667
}, {
  type: 'normal',
  event: '服务器好了',
  time: 1463713158667
}, {
  type: 'error',
  event: '服务器又挂了',
  time: 1463713158667
}, {
  type: 'success',
  event: '服务器又好了',
  time: 1463713158667
}]

export default connect(
  state => ({
    events: MOCK_DATA
  })
)(Events)
