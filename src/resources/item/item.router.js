import { Router } from 'express'

const router = Router()
const mockController = (req, res) => {
  res.send({ data: 'ok' })
}
// /api/item
router
  .route('/')
  .get(mockController)
  .post(mockController)

router
  .route('/:id')
  .get(mockController)
  .put(mockController)
  .delete(mockController)

export default router
