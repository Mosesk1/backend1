import commentSchema from "../models/commentsSchema.js";


const createComment = async(req, res) => {
    try {
      const messages =  await commentSchema.create({
            names: req.body.names,
            comment: req.body.comment
        })
        res.status(200).json({
            message: 'comment successfully sent',
            result:messages
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        
    }
}

const getComments = async(req, res) => {
    try {
        const allMessages = await commentSchema.find({})
        res.status(200).json({
            message: "comment displayed",
            result:allMessages
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
const getComment = async(req,res)=>{
    try {
       let id = req.params.id;
       const message = await commentSchema.findById(id)
       res.status(200).json({
           message:"the comment is displayed",
           result:message
       }) 
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}


const deleteComment = async(req,res)=>{
    try {
        let id = req.params.id;
        await commentSchema.findByIdAndRemove(id)
        res.status(200).json({
            message:"comment deleted."
        })
    } catch (error) {
        res.status(500).json({
            message:"comment not deleted."
        })
    }
}
export {createComment, getComments, getComment, deleteComment}