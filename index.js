import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import router from "./routers/userrouter.js";
import blogRouter from "./routers/blogsrouter.js";
import homeRouter from "./routers/homepage.js";
import msgRouter from "./routers/messagerouter.js";
import comRouter from "./routers/commentsrouter.js";

dotenv.config()

const port = process.env.PORT

mongoose.connect('mongodb+srv://moses:moses123@cluster0.baxcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
console.log('your DB has been connected');



const app = express()


app.use(express.json());
app.use(router);
app.use(blogRouter);
app.use(homeRouter);
app.use(msgRouter);
app.use(comRouter);

app.listen(port, () =>console.log(`server running at ${port}`));