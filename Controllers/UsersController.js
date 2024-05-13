import UserModel from '../Models/UserModel'

const UsersController = {
    getUsers: async (req, res) => {
        try {
            const users = await UserModel.find()
            res.json(users)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    getById: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            res.json(user)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    add: async (req, res) => {
        try {
            const newUser = await UserModel.create(req.body)
            res.json(newUser)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            res.json(updatedUser)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const deletedUser = await UserModel.findByIdAndDelete(id)
            res.json(deletedUser)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

export default UsersController
