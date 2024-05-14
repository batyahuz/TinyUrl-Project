import LinkModel from "../Models/LinkModel.js"

const RedirectController = {
    redirect: async (req, res) => {
        const { id } = req.params
        try {
            const link = await LinkModel.findById(id)
            if (!link) {
                return res.status(404).json({ message: 'Link not found' })
            }
            link.clicks.push({
                insertedAt: new Date(),
                ipAddress: req.ip
            })
            console.log('link.clicks', link.clicks);
            await link.save()
            res.redirect(link.originalUrl)

        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

export default RedirectController
