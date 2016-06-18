/**
 * Created at 16/5/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import { MIRROR_STATE_FAILED, MIRROR_STATE_SUCCEED, MIRROR_STATE_REQUEST } from '../actions/mirrorState'

export default (state = {}, action) => {
  switch (action.type) {
    case MIRROR_STATE_REQUEST:
      return { ...state, loaded: false}
    case MIRROR_STATE_SUCCEED:
      return { ...state, loaded: true, success: true, mirrorState: action.mirrorState, guides: action.guides }
    case MIRROR_STATE_FAILED:
      return { ...state, loaded: true, success: false, error: action.error }
    default:
      return state
  }
}
