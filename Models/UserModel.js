import mongoose from 'mongoose'
import LinkModel from './LinkModel'

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
    links: [LinkModel]
})

export default mongoose.model('users', UserSchema) 
