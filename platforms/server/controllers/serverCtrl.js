// import fetch from 'isomorphic-fetch'
import vnstatDB from 'vnstat-dumpdb'
const v = vnstatDB()

async function getDefaultNetInterface() {
  const config = await getVnstatConfig()
  return config.netInterface
}

async function getVnstatData(netInterface) {
  netInterface = netInterface || await getDefaultNetInterface()
  if (!netInterface) {
    return Promise.resolve({err: 'no net interface determined'})
  }
  return new Promise((resolve, reject) => {
    v.getStats(netInterface, (err, data) => {
      err && reject(err) || resolve(data)
    })
  })
}

function getVnstatConfig() {
  return new Promise((resolve, reject) => {
    v.getConfig((err, data) => {
      err && reject(err) || resolve({
        netInterface: data.Interface,
        updateInterval: data.UpdateInterval
      })
    })
  })
}

export default async (ctx, next) => {

  ctx.body = {
    state: 'success',
    data: await getVnstatData(),
    config: await getVnstatConfig()
  }
}
