import express from 'express'
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.listen(PORT, (error) => {
  if (!error) { console.log('Server is Successfully Running,  and App is listening on port ' + PORT) } else { console.log("Error occurred, server can't start", error) }
}
)
