import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})

app.get("/tasks/:id", (req, res) => {
    res.send("get task by id");
})

app.post("/tasks/", (req, res) => {
    res.send("add a new task");
})

app.put("/tasks/:id", (req, res) => {
    res.send("update a task");
})

app.delete("/tasks/:id", (req, res) => {
    res.send("delete a task");
})
