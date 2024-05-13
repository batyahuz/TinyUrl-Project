import mongoose from 'mongoose'

const LinkSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    clicks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clicks'
    }]
})

export default mongoose.model('links', LinkSchema) 
