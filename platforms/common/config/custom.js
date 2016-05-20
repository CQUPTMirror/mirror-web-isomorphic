/**
 * Created at 16/4/11.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import path from 'path'

const rootPath = path.join(__dirname, '../../..')
export default {
  rootPath,
  publicPath: '/public',
  staticPath: '/public/static',
  port: 3388,
  title: "重庆邮电大学 · 镜像源",
  db: {
    dialect: 'sqlite',
    database: 'main',
    storage: path.join(rootPath, 'database.sqlite')
  }
}
