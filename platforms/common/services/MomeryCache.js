/**
 * Created at 16/5/18.
 * @Author Ling.
 * @Email i@zeroling.com
 */

export default class MomeryCache {
  static create () {
    return new MomeryCache()
  }

  // Singleton
  constructor () {
    if (MomeryCache._instance) {
      return MomeryCache._instance
    } else {
      this._cache = {}
      MomeryCache._instance = this
    }
  }

  /**
   * set cache
   * @param key
   * @param value
   * @param ttl second
   */
  set (key, value, ttl = 0) {
    if (key === undefined || key === null) {
      return null
    }
    const cacheObj = { data: value }
    const expireTimeStamp = +new Date() + Number(ttl) * 1000
    if (expireTimeStamp) {
      cacheObj.expire = new Date(expireTimeStamp)
    }
    this._cache[String(key)] = cacheObj
  }

  get (key) {
    if (key === undefined || key === null) {
      return null
    }
    key = String(key)
    const value = this._cache[key]
    if (!value || !value['data']) {
      return null
    }
    if (!value['expire']) { // 无过期时间
      return value['data']
    } else if (value['expire'] > new Date()) { // 有过期时间 没过期
      return value['data']
    } else { // 有过期时间 过期
      return null
    }
  }

  remove (key) {
    if (key === undefined || key === null) {
      return
    }
    key = String(key)
    delete this._cache[key]
  }

  getAll () {
    const dataSet = {}
    for (let key of Object.keys(this._cache)) {
      const value = this.get(key)
      if (value) {
        dataSet[key] = value
      }
    }
    return dataSet
  }

  clear () {
    this._cache = {}
  }
}
