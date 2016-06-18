/**
 * Created at 16/5/17.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import { combineReducers } from 'redux'
import mirror from './mirrorState'
import server from './serverState'

export default combineReducers({
  mirror,
  server
})
