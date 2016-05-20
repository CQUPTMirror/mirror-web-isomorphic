/**
 * Created at 16/5/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import fetch from 'isomorphic-fetch'

export const MIRROR_STATE_REQUEST = 'MIRROR_STATE_REQUEST'
export const MIRROR_STATE_SUCCEED = 'MIRROR_STATE_SUCCEED'
export const MIRROR_STATE_FAILED = 'MIRROR_STATE_FAILED'

const fetchStateUrl = __SERVER__ ? `http://localhost:${require('../../platforms/common/config').port}/api/state` : '/api/state'
function fetchState() {
  return dispatch => {
    dispatch(mirrorStateRequest())
    return fetch(fetchStateUrl)
      .then(res => res.json())
      .then(data => dispatch(mirrorStateSucceed(data)))
      .catch(e => dispatch(mirrorStateFailed(e)))
  }
}

export function fetchStateIfNeeded (state) {
  return (dispatch) => {
    if( !state.loaded ) {
      return dispatch(fetchState())
    }
    return dispatch(mirrorStateSucceed(state.mirror.tableDataSource))
  }
}

export function mirrorStateRequest () {
  return {
    type: MIRROR_STATE_REQUEST
  }
}
export function mirrorStateSucceed (data) {
  return {
    type: MIRROR_STATE_SUCCEED,
    mirrorState: data.mirrorState,
    guides: data.guides
  }
}
export function mirrorStateFailed (error) {
  return {
    type: MIRROR_STATE_FAILED,
    error
  }
}