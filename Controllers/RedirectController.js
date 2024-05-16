import LinkModel from "../Models/LinkModel.js"

const RedirectController = {
    redirect: async (req, res) => {
        const { alias } = req.params
        try {
            const link = await LinkModel.findOne({ alias: alias })
            if (!link) {
                return res.status(404).json({ message: 'Link not found' })
            }
            const click = {
                insertedAt: new Date(),
                ipAddress: req.ip
            }
            const targetName = req.query[link.targetParamName]
            if (targetName) {
                const { value } = link.targetValues.find(tv => tv.name === targetName)
                click.targetParamValue = value
            }
            console.log('click: ', click)
            link.clicks.push(click)
            console.log('link.clicks', link.clicks)
            await link.save()
            res.redirect(link.originalUrl)

        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

export default RedirectController
