import mongoose from 'mongoose'
import { isIP } from 'validator'

const ClickSchema = mongoose.Schema({
    insertedAt: {
        type: Date,
        required: true
    },
    ipAddress: {
        type: String,
        required: true,
        validate: {
            validator: (value) => isIP(value, 6),
            message: 'IP address must be a valid IPv4 or IPv6 address',
        }
    }
})

export default mongoose.model('clicks', ClickSchema) 
