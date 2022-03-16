import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.JWT_SECRET);

  export const isAdmin = (req, res, next) => {
    //const user = req.user;
    const token = req.header('authorization')
    if (!token) {
      return res.status(400).json({
        message: 'Access Denied!, Only Admin can perform this task'
      })
    }
    try {
      const verified = jwt.verify(token, `${process.env.JWT_SECRET}`)
      req.user = verified
      next()
    } catch (error) {
      res.status(400).json({
        message: 'Invalid Token'
      })
    }
  
  }
