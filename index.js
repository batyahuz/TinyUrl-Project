import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import LinksRouter from './Routers/LinksRouter'
import UsersRouter from './Routers/UsersRouter'
import connectDB from './DataBase'

connectDB()
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/links', LinksRouter)
app.use('/users', UsersRouter)

const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
