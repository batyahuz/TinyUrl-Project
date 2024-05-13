const links = [
    { _id: 1, originalUrl: "myurl" },
    { _id: 2, originalUrl: "hi!" },
    { _id: 3, originalUrl: "nothing" },
    { _id: 4, originalUrl: "my name is Batya" },
]

const LinksController = {
    getLinks: (req, res) => {
        res.send(links)
    },
    getById: (req, res) => {
        const { id } = req.params
        res.send(links.find(link => link._id === id))
    },
    add: (req, res) => {
        links.push(req.body)
        res.sendStatus(201)
    },
    update: (req, res) => {
        const { id } = req.params
        const newLink = req.body
        const index = links.findIndex(link => link._id === id)
        
        if (index !== -1) {
            links[index].originalUrl = newLink.originalUrl
        }
        res.sendStatus(201)
    },
    delete: (req, res) => {
        const { id } = req.params
        links.splice(links.findIndex(link => link._id === id), 1)
        res.sendStatus(204)
    }
}

export default LinksController
