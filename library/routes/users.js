import express from 'express';
import {getUsers,createUser} from '../controllers/users.js'


const router = express.Router();

router.get("/",getUsers)
//router.get("/:id",getUserById)
router.post("/",createUser)
//router.delete("/:id",deleteUserById)//it should be used as variable and hence colon is used
//router.patch("/:id",updateUserById)

export default router