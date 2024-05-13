// const users = [
//     {
//         _id: 1,
//         name: "my name",
//         email: "aa@gmail.com",
//         password: "1234",
//         links: []
//     },
//     {
//         _id: 2,
//         name: "my name",
//         email: "aa@gmail.com",
//         password: "1234",
//         links: []
//     },
//     {
//         _id: 3,
//         name: "my name",
//         email: "aa@gmail.com",
//         password: "1234",
//         links: []
//     },
// ]

const UsersController = {
    getLinks: (req, res) => {
        res.send(users)
    },
    getById: (req, res) => {
        const { id } = req.params
        res.send(users.find(user => user._id === id))
    },
    add: (req, res) => {
        users.push(req.body)
        res.sendStatus(201)
    },
    update: (req, res) => {
        const { id } = req.params
        const newUser = req.body
        const index = users.findIndex(user => user._id === id)

        if (index !== -1) {
            users[index].name = newUser.name
            users[index].email = newUser.email
            users[index].password = newUser.password
            users[index].links = newUser.links
        }
        res.sendStatus(201)
    },
    delete: (req, res) => {
        const { id } = req.params
        users.splice(users.findIndex(user => user._id === id), 1)
        res.sendStatus(204)
    }
}

export default UsersController

