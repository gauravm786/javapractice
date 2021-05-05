import express from 'express';//while running application the node will add express to your code
import {getUsers,createUser,getUserById,deleteUserById,updateUserById} from '../controller/users.js'

const router=express.Router();//i will need to get router which i get from express so for that i will use constant variable

router.get("/",getUsers)
router.get("/:id",getUserById)
router.post("/",createUser)
router.delete("/:id",deleteUserById)//it should be used as variable and hence colon is used
router.patch("/:id",updateUserById)

//router.put("/id",updateUser)


export default router//whatever variable is here when you are exporting it,this means whenever you are allowing particular package
//will be imported into some other module,whenever this module will be imported to some other life,then these router will be used to access the function inside it


//to start application first create index
//then model(user,book,student,college),
//then router(routed to specific function,router is exported to index.js)
//then controller(in controller we will define all theose function and those function will be used in router)

//http://localhost:8888/user?name=Gaurav&age=22,here till http://localhost:8888/user is the bunch of JSON data 
//and query is simply trying to work on the bunch of JSON data,if query works on bunch of data then we will get filtered data  