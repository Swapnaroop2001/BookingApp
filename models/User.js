import mongoose from "mongoose";
const { Schema } = mongoose;


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model('User', userSchema)