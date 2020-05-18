import { Router } from 'express'

const router = Router()

router
  .get('/', (req, res) => {
    res.send({ data: 'some item' })
  })
  .get('/:id', (req, res) => {
    res.send({ data: 'by id' })
  })
  .post('/', (req, res) => {
    res.send({ data: 'post' })
  })
  .delete('/:id', (req, res) => {
    res.send({ data: 'delete' })
  })
  .put('/:id', (req, res) => {
    res.send({ data: 'put' })
  })

export default router
