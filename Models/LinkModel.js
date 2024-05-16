import mongoose from 'mongoose'

const LinkSchema = mongoose.Schema({
    alias: { type: String, required: true },
    originalUrl: { type: String, required: true },
    clicks: [{
        insertedAt: { type: Date, required: true },
        ipAddress: { type: String, required: true },
        targetParamValue: { type: String, required: true }
    }],
    targetParamName: { type: String, required: true },
    targetValues: [{
        name: { type: String, required: true },
        value: { type: String, required: true }
    }]
})

export default mongoose.model('links', LinkSchema) 
