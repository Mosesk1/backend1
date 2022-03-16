import mongoose from 'mongoose';




const articleSchema = new mongoose.Schema({
    title: { type: String},
    content: { type: String},
    imageUrl: { type: String },
    userId: { type: String},
    avatar: { type: String},
   cloudinary_id: { type: String},
//    comments: [{

//     type: mongoose.Schema.Types.ObjectId,
//     ref: "comment"
// }]
});

const article = mongoose.model("article", articleSchema)


export default article;