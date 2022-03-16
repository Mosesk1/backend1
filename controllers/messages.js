import messageSchema from "../models/messagesSchema.js";


const createMessage = async(req, res) => {
    try {
      const messages =  await messageSchema.create({
            names: req.body.names,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })
        res.status(200).json({
            message: 'message successfully sent',
            result:messages
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        
    }
}

const getMessages = async(req, res) => {
    try {
        const allMessages = await messageSchema.find({})
        res.status(200).json({
            message: "messages displayed",
            result:allMessages
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
const getMessage = async(req,res)=>{
    try {
       let id = req.params.id;
       const message = await messageSchema.findById(id)
       res.status(200).json({
           message:"the message is displayed",
           result:message
       }) 
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}

const updateMessage = async(req, res) => {
    try {
        let id = req.params.id;
        const updated = await messageSchema.findByIdAndUpdate(id, req.body,{new:true})
        res.status(200).json({
            message:"message successfully updated",
           
        })
    } catch (error) {
        res.status(500).json({
            message:error
        })
        
    }
}

const deleteMessage = async(req,res)=>{
    try {
        let id = req.params.id;
        await messageSchema.findByIdAndRemove(id)
        res.status(200).json({
            message:"message deleted."
        })
    } catch (error) {
        res.status(500).json({
            message:"message not deleted."
        })
    }
}
export {createMessage, getMessage, getMessages, updateMessage, deleteMessage}