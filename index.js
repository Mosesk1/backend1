import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import router from "./routers/userrouter.js";
import blogRouter from "./routers/blogsrouter.js";
import homeRouter from "./routers/homepage.js";
import msgRouter from "./routers/messagerouter.js";
import comRouter from "./routers/commentsrouter.js";
import cors from "cors";

dotenv.config()

const port = process.env.PORT

mongoose.connect('mongodb+srv://moses:moses123@cluster0.baxcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
console.log('your DB has been connected');



const app = express()
// const cors=require('cors');

app.use(cors());
app.use(express.json());
app.use(router);
app.use(blogRouter);
app.use(homeRouter);
app.use(msgRouter);
app.use(comRouter);

// Swagger Info Object
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'My blog API Documentation',
        description: 'Blog API Documentation',
        contact: {
          name: 'min'
        },
        server: 'http://localhost:3000'
      }
    },
    components: {
      securitySchemes: {
        jwt: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{
      jwt: []
    }],
    apis: ['./routers/*.js']
  }
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions)
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
  

app.listen(port, () =>console.log(`server running at ${port}`));

export default app;