import express from 'express'
import { Frase } from './Frase.js'

const app = express()

const manager = new Frase()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/frase', (req, res) => {
  const frase = manager.get()
  res.json({ frase })
})

app.get('/api/palabras/:pos', (req, res) => {
  const { pos } = req.params
  const respuesta = manager.getByPos(pos - 1)
  res.json(respuesta)
})

app.post('/api/palabras', (req, res) => {
  const { palabra } = req.body
  const respuesta = manager.add(palabra)
  res.json(respuesta)
})

app.delete('/api/palabras/:pos', (req, res) => {
  const { pos } = req.params
  const respuesta = manager.delete(pos - 1)
  res.json(respuesta)
})

app.put('/api/palabras/:pos', (req, res) => {
  const { pos } = req.params
  const { palabra } = req.body

  const respuesta = manager.update(pos - 1, palabra)
  res.json(respuesta)
})

app.listen(8080, () => console.log('Server on '))
