import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    names:{
        type:'String',
        required:true
    },
    
   comment:{
        type:'String',
        required:true
    }
})

export default new mongoose.model('comment', commentSchema)