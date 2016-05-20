// import fetch from 'isomorphic-fetch'
import marked from 'marked'
import hljs from 'highlight.js'
import { Guides, Mirrors } from '../models'

marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value
})

export default async (ctx, next) => {
  // get mirrorList
  const mirrorStateInstance = await Mirrors.findAll({})

  // filter guides
  const guides = []
  for (let state of mirrorStateInstance) {
    if (state.guideId) {
      const guideInstance = await Guides.findById(state.guideId)
      guides.push({
        universalName: state.universalName,
        parsedMarkdown: marked(guideInstance.markdown)
      })
    }
  }

  ctx.body = {
    mirrorState: mirrorStateInstance.map(o => ({
      universalName: o.universalName,
      lastUpdate: o.lastUpdate,
      mirrorUrl: o.mirrorUrl,
      guideUrl: o.guideUrl
    })),
    guides: guides
  }
}
