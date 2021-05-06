/*
//1st way
import express  from "express"  
//for using express we use import express  from express;   //This is import statement
import bodyparser from "body-parser"

const server = express()
const PORT=7777
server.use(bodyparser.json())

server.get("/",(req,res)=>res.send("Welcome to my library")) //handle http://localhost:7777

server.listen(PORT)

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage
*/

/*
//2nd way (using variable)
import express  from "express"
//for using express we use import express  from express;   //This is import statement
import bodyparser from "body-parser"

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777
server.get("/",homepage)
server.all
server.listen(PORT)

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage
*/

/*
//using router and controller
import express  from "express"        //This is import statement
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777

server.use("/user",userRouter)
server.get("/",homepage)

server.listen(PORT)

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage
//after using  http://localhost:7777/user on webpage,you will get:-
//[] on webpage
//In function call getUser.. I this /users endpoint got hit. will be printed as output in terminal
*/

//using postman

import express  from "express"        //This is import statement
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777

server.use("/user",userRouter)
server.get("/",homepage)

server.listen(PORT)

//ouput:- 
//after using  http://localhost:7777 on postman using GET,you will get:- 
//Welcome to my library on webpage
//after using  http://localhost:7777/user on postman using GET,you will get:-
//[] will be ptinted as output on postman 
//In function call getUser().. I this /users endpoint got hit. will be printed as output in terminal
//after using  http://localhost:7777/user on postman using POST ,you will get:-
//OK will be printed as output on postman 
//In function call createUse() .. I this /users endpoint got hit. will be printed as output in termi

