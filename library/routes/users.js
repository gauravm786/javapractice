/*
//here we are creating routes for users endpoint

import express from 'express';
//we need to use express for router

import {getUsers,createUser} from '../controllers/users.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getUsers)
//router.get("/:id",getUserById) //it should be used as variable and hence colon is used
router.post("/",createUser)
//router.delete("/:id",deleteUserById)//it should be used as variable and hence colon is used
//router.patch("/:id",updateUserById)

export default router //to export the user endpoint in this file  we use export default router
*/