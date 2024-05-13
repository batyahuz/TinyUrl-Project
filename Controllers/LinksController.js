import LinkModel from '../Models/LinkModel.js'
import UserModel from '../Models/UserModel.js'

const LinksController = {
    getLinks: async (req, res) => {
        try {
            const links = await LinkModel.find()
            res.json(links)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    getById: async (req, res) => {
        try {
            const link = await LinkModel.findById(req.params.id)
            res.json(link)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    add: async (req, res) => {
        const { id } = req.params.id
        try {
            const newLink = await LinkModel.create(req.body)
            if (id) {
                const user = await UserModel.findById(req.params.id)
                user.links.push(newLink)
                await user.save()
            }
            res.json(newLink)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        try {
            const updatedLink = await LinkModel.findByIdAndUpdate(id, req.body, { new: true })
            res.json(updatedLink)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const deletedLink = await LinkModel.findByIdAndDelete(id)
            res.json(deletedLink)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

export default LinksController
