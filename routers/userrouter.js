import {login, signup, getUsers, updateUser, deleteUser} from '../controllers/user.js';
import express from 'express';

const router = express.Router()

 router.post('/user/signup', signup);

 router.post('/user/login', login);

 router.get('/users', getUsers);

 router.delete('/user/:id', deleteUser);

 router.patch('/user/:id', updateUser);
 
 export default router;