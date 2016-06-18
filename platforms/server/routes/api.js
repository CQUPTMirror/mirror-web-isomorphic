import Router from 'koa-router'
import mirrorState from '../controllers/stateCtrl'
import serverState from '../controllers/serverCtrl'
const router = new Router()
router.prefix('/api')

router.get('/state', mirrorState)
router.get('/server', serverState)

export default router
