import ClickModel from "../Models/ClickModel.js"
import LinkModel from "../Models/LinkModel.js"

const RedirectController = {
    redirect: async (req, res) => {
        const { id } = req.params
        try {
            const link = await LinkModel.findById(id)
            if (!link) {
                return res.status(404).json({ message: 'Link not found' })
            }
            const click = new ClickModel({
                insertedAt: new Date(),
                ipAddress: req.ip
            })
            link.clicks.push(click)
            await link.save()
            res.redirect(link.originalUrl)

        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

export default RedirectController
