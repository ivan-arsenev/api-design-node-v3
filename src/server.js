import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router() // register router for make special instanse of routing

app.disable('x-powered-by')

app.use(cors()) // implement cross domains to use others domeins
app.use(json()) // converts body to js object (req.body)
app.use(urlencoded({ extended: true })) // transf ? and other from url
app.use(morgan('dev')) // loggin midleware

router
  .route('/cat')
  .get()
  .post()

router
  .route('/cat/:id')
  .get()
  .post()
  .delete()

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})
app.use('/api', router)

app.get('/data', (req, res) => {
  res.send({ data: 'hello' })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('Server is on 3000')
  })
}
