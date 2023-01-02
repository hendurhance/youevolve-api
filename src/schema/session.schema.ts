import mongoose from "mongoose"

export const SessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    valid: {
        type: Boolean,
        default: true,
    },
    userAgent: {
        type: String
    }
}, { timestamps: true })