/**
 * Created at 16/5/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import { SERVER_STATE_FAILED, SERVER_STATE_SUCCEED, SERVER_STATE_REQUEST } from '../actions/serverState'

export default (state = {}, action) => {
  switch (action.type) {
    case SERVER_STATE_REQUEST:
      return { ...state }
    case SERVER_STATE_SUCCEED:
      const _data = { serverData: action.data.data, serverConfig: action.data.config, loaded: true }
      return { ...state, ..._data}
    case SERVER_STATE_FAILED:
      return { ...state, loaded: false}
    default:
      return state
  }
}
