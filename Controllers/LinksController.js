import LinkModel from '../Models/LinkModel.js'
import UserModel from '../Models/UserModel.js'

const getShortLink = (link) => {
    return '/' + link.alias + '?' + link.targetParamName + '='
}

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
        const { id } = req.params
        try {
            const link = await LinkModel.find({ id: id })
            res.json(link)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    add: async (req, res) => {
        const { userId } = req.params
        try {
            const existLink = await LinkModel.find({ id: req.body.alias })
            if (existLink) {
                return req.status(409).json({ message: 'alias is not available' })//TODO
            }
            const newLink = await LinkModel.create({ ...(req.body), targetParamName: 't' })
            if (userId) {
                const user = await UserModel.findById(userId)
                user.links.push(newLink)
                await user.save()
            }
            res.send(getShortLink(newLink))
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        try {
            const updatedLink = await LinkModel.findByIdAndUpdate(id, req.body, { new: true })
            res.send(getShortLink(updatedLink))
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const deletedLink = await LinkModel.findByIdAndDelete(id)
            res.send(getShortLink(deletedLink))
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

export default LinksController
