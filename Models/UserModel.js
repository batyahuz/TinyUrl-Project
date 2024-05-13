import mongoose from 'mongoose'
import LinkSchema from './LinkModel'

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    links: [LinkSchema]
})

export default mongoose.model('users', UserSchema) 
