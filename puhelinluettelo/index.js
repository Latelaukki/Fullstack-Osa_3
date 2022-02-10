const express = require('express') // sisäänrakennettu web-palvelin
const app = express()

app.use(express.json()) // request.body määritellään

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Persons!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// app.get('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id) // id integer muotoon
//   const note = notes.find(note => note.id === id)
  
//   if (note) {
//     response.json(note)
//   } else {
//     response.status(404).end()
//   }
// })

// app.post('/api/notes', (request, response) => {
//   console.log(request.headers)
//   const note = request.body
//   console.log(note)
//   response.json(note)
// })

// app.delete('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})