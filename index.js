import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import LinksRouter from './Routers/LinksRouter.js'
import UsersRouter from './Routers/UsersRouter.js'
import connectDB from './DataBase.js'

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
    const date = new Date()
    console.log('date', date)
    res.send('Hello World!')
})
