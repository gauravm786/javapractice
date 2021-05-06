/*
//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)  //send all the user
}

export const createUser=(req,res)=>
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    res.send("ok")
}
*/

//4 aptil

/*
//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)
}

export const createUser=(req,res)=>        //createUser is used for creating new user
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    //res.send("ok")
    user.push(req.body) //it will send [] as output on postman if we use http://localhost:7777/user

    // when the request is sent from frontend to backend
    //data(body) will be wrapped in JSON format and sent as a request from frontend to backend
    //now backend will capture this data(body) either in database or users Array(taht we are using in our case)
    //so that data(body) is available as req.body
    //whatever data(body) is sent from frontend to backend that body will be captured or available inside req.body
    //now i need to store data of req.body inside my array,so we simply need to push it
    //for that we use user.push(req.body)
}
*/

/*
//for using this schema we need to import it,for importing it we can simply use import statement
import {User} from '../model/users.js'

//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    //res.send(users) //after creating model comment this out

    User.find() //to get detail from database there is one function,it will try to find all the record for user,whatever record you got can you simply send it to the response
    .then //until now we were simply getting response from user array,but instead of this we must get respone from database
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}    

export const createUser=(req,res)=>        //createUser is used for creating new user
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    //res.send("ok")
    //user.push(req.body) //after creating model comment this out

    //we need to create object out of model and storing it for that i need to create it first
    //we must create model out of it 

    const user=new User //this Uaer is from model
    (
        {
            name:req.body.name,
            gender:req.body.gender,
            age:req.body.age,
            city:req.body.city,
        }
    )

user.save()//save() makes sure that data is stored inside the database
    .then                            //if code is successful or no error then .then method is used             
    (
        (result)=>                   
        {
            res.send(result)
        }
    )
    .catch          //if code is not successful or there is error then .catch method is used
    (
        (err)=>
        {
            console.log(err)

        }
    )
    
}

export const getUserById=(req,res)=>
{
    console.log("In function call getUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findById(req.params.id) 
    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}
*/