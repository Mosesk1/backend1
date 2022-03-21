
import  Article  from "../models/blogsSchema.js"
import dotenv from "dotenv"

dotenv.config();

export async function getArticle (req, res, next) {
    let article
    try {
        article = await Article.findById(req.params.id)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.article = article
    next()
}

export const createArticle = (req, res, next) => {

    // const result = cloudinary.uploader.upload(req.file.path)
    // res.json(result)

    const article =  Article({
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.imageUrl,
      userId: req.body.userId,
      role: req.body.role
    });
   
    article.save().then(
      () => {
        res.status(201).json({
          article: 'Article saved successfully!',
          "data" : { "userId" : req.body.userId, "title" : req.body.title, "content" : req.body.content,"imageUrl": req.body.imageUrl }

        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };


export const getOneArticle =(req, res, next) => {
    Article.findOne({
        _id: req.params.id
    }).then(
        (article) => {
                res.status(200).json(article)
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};


export const modifyArticle = async (req, res, next) => {
    let id= req.params.id
    if(!req.body.title) res.article.title = req.body.title
    if(!req.body.content) res.article.content = req.body.content
    if(!req.body.imageUrl) res.article.imageUrl = req.body.imageUrl
    try {
        const updatedArticle = await Article.findByIdAndUpdate(id, req.body, {new:true})
        res.status(201).json(updatedArticle)
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: 'failed to'
        })
    }
   
};


export const deleteArticle = (req, res, next) =>{
    Article.findOne({ _id: req.params.id }).then(
        (article) => {
            if (!article){
               return res.status(404).json({
                    "status" : "fail",
                    "result" : { "article":"No such article"}
                });
            }
            Article.deleteOne({_id: req.params.id}).then(
                () => {
                    res.status(200).json({
                        article: 'Deleted',
                        data: null
                    });
                }
            ).catch(
                (error) => {
                   res.status(401).json({
                       error: new Error('No such article'),
                       "status" : "fail",
                       "data" : { "title" : "A title is required" }
                   });
                }
            );
        }
    );
    
};


export const getAllArticles= (req, res, next) => {
    Article.find().then(
        (articles) => {
            res.status(200).json(articles);
        }
    ).catch(
        (error) => {
            console.log(error);
            res.status(400).json({
                error: error
            });
        }
    );
   
    };




