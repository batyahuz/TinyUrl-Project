import mongoose from 'mongoose'

const ClickSchema = mongoose.Schema({
    insertedAt: {
        type: Date,
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    }
})

export default mongoose.model('clicks', ClickSchema) 
