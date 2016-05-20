#!/usr/bin/env babel-node
const models = require('../platforms/server/models')
import request from 'request-promise'

const pkgJsonUrl = 'https://github.com/CQUPTMirror/cqupt-mirrors-howto/raw/master/package.json'

request(pkgJsonUrl)
  .then(body => {
    const pkg = JSON.parse(body)
    for (let key of Object.keys(pkg.tree)) {
      let val = {
        universalName: key,
        lastUpdate: +new Date(),
        mirrorUrl: `https://mirrors.cqupt.edu.cn/mirror/${key.toLowerCase()}`,
        guideUrl: `/guide/${key}`
      }
      models.Mirrors
        .findOrCreate({
          where: { universalName: key },
          defaults: val
        }).spread(async (m, created) => {
          const md = await request(`https://raw.githubusercontent.com/CQUPTMirror/cqupt-mirrors-howto/master/${pkg.tree[key]}`)
          if (!created && m.guideId) {
            const guideIns = await models.Guides.findById(m.guideId)
            await guideIns.update({ markdown: md })
          } else {
            const guideIns = await models.Guides.build({ markdown: md }).save()
            val.guideId = guideIns.id
          }
          await m.update(val)
        })
    }
  }).then(() => {
    [{
      universalName: 'NodeJs',
      mirrorUrl: 'https://npm.mirror.cqupt.edu.cn/dist/node'
    }, {
      universalName: 'Iojs',
      mirrorUrl: 'https://npm.mirror.cqupt.edu.cn/dist/iojs'
    }, {
      universalName: 'Archlinuxcn',
      mirrorUrl: 'https://mirrors.cqupt.edu.cn/mirror/archlinuxcn'
    }, {
      universalName: 'Lxc-images',
      mirrorUrl: 'https://mirrors.cqupt.edu.cn/mirror/lxc-images'
    }].map(async val => {
      await models.Mirrors
        .findOrCreate({
          where: { universalName: val.universalName },
          defaults: val
        }).spread(async (m, created) => {

        })
    })
  })
