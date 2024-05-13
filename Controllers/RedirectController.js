
const RedirectController = {
    redirect: async (req, res) => {
        const { id } = req.params;
        try {
            const link = await LinkModel.findById(id);
            if (!link) {
                return res.status(404).json({ message: 'Link not found' });
            }
            res.redirect(link.url);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default RedirectController
