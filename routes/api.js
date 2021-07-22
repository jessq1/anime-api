import { Router } from 'express'
const router = Router()
import * as animesCtrl from '../controllers/animes.js'


router.get('/animes', animesCtrl.index)

router.get('/animes/:id', animesCtrl.show)
router.post('/animes', animesCtrl.create)
router.put('/animes/:id', animesCtrl.update)
router.delete('/animes/:id', animesCtrl.delete)

export {
  router
}
