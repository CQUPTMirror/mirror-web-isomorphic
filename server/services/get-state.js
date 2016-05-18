/**
 * Created at 16/5/18.
 * @Author Ling.
 * @Email i@zeroling.com
 */
/**
 * Created at 16/3/21.
 * @Author Ling.
 * @Email i@zeroling.com
 */

import fetch from 'isomorphic-fetch'
import MemoryCache from './store'
const store = new MemoryCache()

export function getState () {
  const sKey = 'mirrors_state';
  const cachedData = store.get(sKey);
  if (cachedData && cachedData.timeout > +new Date) {
    return Promise.resolve(cachedData.data);
  }
  return new Promise((resolve, reject) => {
    fetch('/api/state').then(res => res.json()).then(remoteData => {
      const data = {
        timeout: +new Date() + 1000 * 60, // timeout 60s
        data: remoteData
      };
      store.set(sKey, data);
      return resolve(remoteData);
    }).catch(e => {
      return reject(e);
    });
  });
}

export function getMirrorsHowTo () {
  const sKey = 'mirrors_how_to';
  const cachedData = store.get(sKey);
  if (cachedData && cachedData.timeout > +new Date) {
    return Promise.resolve(cachedData.data);
  }
  return new Promise((resolve, reject) => {
    fetch('/api/howto').then(res => res.json()).then(remoteData => {
      const data = {
        timeout: +new Date() + 1000 * 3600,
        data: remoteData
      };
      store.set(sKey, data);
      return resolve(remoteData);
    }).catch(e => {
      return reject(e);
    });
  });
}


