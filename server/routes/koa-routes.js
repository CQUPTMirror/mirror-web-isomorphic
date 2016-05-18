import Router from 'koa-router'
import state from '../controllers/stateCtrl'
import howto from '../controllers/howtoCtrl'
const router = new Router()
router.prefix('/api')

router.get('/state', state)
router.get('/howto', howto)

export default router
