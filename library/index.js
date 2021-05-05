//when we install node we get npm,node,npx
//for using express we use import express  from express;
//This is standard way of writing code
import express  from "express"       //import express    //This is import statement
import bodyparser from "body-parser"  //import body parser 
import userRouter from "./routes/users.js" //import userRouter,this is router
import mongoose from "mongoose"

const dbURL='mongodb+srv://gaurav2:gaurav786@cluster0.b4muw.mongodb.net/library?retryWrites=true&w=majority'
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(
    (result)=>//result parameter is used,if success then this is executed
    {
        console.log("connected to the Database")
        server.listen(PORT)//start application by listening PORT,if you will not use server.listen then your server will not start
        console.log("server started successfully")
    }
)
.catch //if there is any issue while connecting to database then catch method is called,if error then this is executed
(
    (err)=>
    {
        console.log(err)
    }
)

//this is for creating server and port, to get the server and port       //This is declaration part of our server
const server = express()
//to use port
const PORT=8888
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library")//handle http://localhost:8888/ //this is function for handling homepage....this went to controller

server.use("/user",userRouter)//(base url,after url)here user is base url and userRouter is after url
server.get("/",homepage)//to get data of homepage use "/" before,homepage and if anything else used after ""/" e.g /book ,then use /book after port at the time of request,also to handle homepage,handling get request....this went to routes

/*
server.all//if any reqquest im getting which is not equal to this server.get("/",homepage) then go for server.all,if you are getting particular request then simply go over and see any file you have handle the request or not,
//if you have handle then throw the answer and if you have not handle the endpoint then simply it will show error 404 page not found
//for using import and export use "type":"module"
*/

//to run api,postman(node index.js,node i -g nodemon,nodemon index.js)


/*To connect API to database(mongodb) 
//npm install -save mongoose(first intall mongoose)
//mongodb+srv://<username>:<password>@cluster0.b4muw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority(copy link from mongodb web)
//create variable and assign the link to it 
//to connect API to database(mongod),we use mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
//after that .then is used to perform operation
*/

//for hadling mongodb operation,we use mongoose
//to start application use nodemon file.js(e.g:-nodemon node.js)
//after successfully connecting to the database move server.listen(PORT) inside .then function and also remove console.log(result) otherwise use it(server.liste(PORT)) at last line of index.js 
//after successfull bconnectong to the database,then only start your application