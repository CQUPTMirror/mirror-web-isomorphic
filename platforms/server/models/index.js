/**
 * Created at 16/5/20.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import Sequelize from 'sequelize'
import config from '../../common/config'

const database = new Sequelize(config.db.database, config.db.username, config.db.password, {
  dialect: config.db.dialect,
  storage: config.db.storage,
  logging: false
})

export const Guides = database.define('guides', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  markdown: Sequelize.TEXT
})

export const Mirrors = database.define('mirrors', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  universalName: Sequelize.TEXT,
  lastUpdate: Sequelize.TEXT,
  mirrorUrl: Sequelize.TEXT,
  guideUrl: Sequelize.TEXT,
  guideId: {
    type: Sequelize.INTEGER,
    references: {
      model: Guides,
      key: 'id'
    }
  }
})

Promise.all([Guides.sync(), Mirrors.sync()]).then(() => {
  console.log('All tables have synced!')
})
