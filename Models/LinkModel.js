import mongoose from 'mongoose'
import ClickModel from './ClickModel'

const LinkSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    clicks: [ClickModel]
})

export default mongoose.model('links', LinkSchema) 
