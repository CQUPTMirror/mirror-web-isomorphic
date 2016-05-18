import fetch from 'isomorphic-fetch'

export default async (ctx, next) => {
  ctx.body = await fetch('https://mirror.cqupt.edu.cn/api/howto').then(res => res.json())
}
