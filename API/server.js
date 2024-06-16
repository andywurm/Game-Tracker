const express = require('express')
const gameRoutes = require('./src/Games/routes')
const cors = require('cors')

const app = express();
const port = 8000

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.use('/api/v1/games', gameRoutes)

app.listen(port, () => console.log(`app is listening on ${port}`))