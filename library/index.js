//In index page we are creating server,handling homepage,handle all the endpoint(endpoint like author,book,user,roles)
//while making API our first file is index.js

//when we install node we get npm,node,npx
//npm i express install express
//npm i -g express install express globally

//This is the standard way of coding
/*
//It is the standard way of Coding
//1st way
//for using express we need to import express by using(import express  "from express" )   //This is import statement
import express  from "express"  
//for handling the JSON part and for sending and retriving data we use bodyparser as it will help us to add,delete and modify the data
import bodyparser from "body-parser"

//created a server and PORT                                                               //This is declaration part of our server
const server = express() //here 
const PORT=7777
//in previous class we use{"content-Types":"text/plain"}  and JSON everytime and instead of writing JSON everytime,we use JSON one time in bodyparser
server.use(bodyparser.json()) 

//this is base url ("/") and then arrow function is used like this:-("/",arrow function)
server.get("/",(req,res)=>res.send("Welcome to my library")) //handle http://localhost:7777

//server will listen to PORT 
server.listen(PORT)

//for starting application we use node index.js
//for using import and export we need to mention "type":"module" in package.json

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
//server.get("/book",homepage)

//this functionality(server.all) is given by express 
//server.all //if any request im getting which is not equal to this server.get("/",homepage) then go to server.all,if you are getting particular request then simply go over and see any file on which you have handle the request or not,
//if you have handle the endpoint(endpoint like author,book,user,roles) then throw the answer and if you have not handle the endpoint then simply it will show error 404 page not found
server.listen(PORT)

//if we use http://localhost:7777/ this simply refer to this http://localhost:7777 and no data after it.
//then,Welcome to my library on webpage will be printed as output on webpage
//if we use server.get("/book",homepage) 
//if we use http://localhost:7777 then cannot get / will be printed on webpage as error
//if we use http://localhost:7777/book
//then,Welcome to my library on webpage will be printed as output on wepage

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage
*/

/*
//using router and controller
import express  from "express"        //This is import statement
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"
//for using router we use import userRouter from "./routes/users.js" and we import it from "./routes/users.js" and 

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777 .... this went to controllers

server.use("/user",userRouter)
server.get("/",homepage) //handling get request....this went to routes

server.listen(PORT)

//

//output:-
//after using  http://localhost:7777 on webpage,you will get:- 
//Welcome to my library on webpage
//after using  http://localhost:7777/user on webpage,you will get:-
//[] on webpage
//In function call getUser.. I this /users endpoint got hit. will be printed as output in terminal
*/

//using postman

/*
import express  from "express"        //This is import statement
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777

server.use("/user",userRouter) 
//here userRouter is called 
//"/user" base endpoint is added is inside server.use,no need to use it on router.get()which is in routes folder
//if we use /user then call will go inside userRouter and then on routes and then users.js

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
//In function call createUse() .. I this /users endpoint got hit. will be printed as output in terminal
*/


//nodemon is used when:- 
//for exiting from the command we use ctrl+c everytime
//to avoid this repition we use nodemon 
// to install nodemon we use npm i -g nodemon

// if we use nodemon then output in terminal will be like this:-
/*
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
In function call getUser().. I this /users endpoint got hit.
In function call createUse() .. I this /users endpoint got hit.
*/

//3 April end