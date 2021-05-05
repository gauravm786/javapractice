import {User} from '../models/user.js' //after creating model import User

let users=[]//this will act as a user table(database)..later will replace this with DB call

export const getUsers=(req,res)=> //?means query
{
    console.log("Hi")
    console.log(req.query)
    if (req.query.age)
    {
       getUsersByAge(req,res)
        
    }
    else
    {        
    console.log("In function call getUser.. I this /users endpoint got hit.")
    //res.send(users)
    User.find() //to get detail from database tere is one function,it will try to find all the record for user,whatever record you got can you simply send it to the response
    .then//until now we were simply getting response from user array,but instead of this we must get respone from database
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
        
        
    console.log("In function call getUser.. I this /users endpoint got hit.")
    //res.send(users)
    User.find() //to get detail from database tere is one function,it will try to find all the record for user,whatever record you got can you simply send it to the response
    .then//until now we were simply getting response from user array,but instead of this we must get respone from database
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
/*
export const createUser=(req,res)=>
{
    console.log("In function call getUser.. I this /users endpoint got hit with post request.")
    res.send("ok")
}
*/

export const createUser=(req,res)=>
{
    console.log("In function call getUser.. I this /users endpoint got hit with post request.")
    //users.push(req.body) //after creating model comment this out
    const user=new User
    (
        {
            name:req.body.name,
            gender:req.body.gender,
            age:req.body.age,
            city:req.body.city,
        }
    )

user.save()//save() makes sure that data is stored inside the database
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

//all the data from database will be fetched and will be served you as a JSON file

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




export const deleteUserById=(req,res)=>
{
    console.log("In function call deleteUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findByIdAndDelete(req.params.id) 
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

export const updateUserById=(req,res)=> //patch is basically used to update a particular entry and update is use to update the entire entry
{
    console.log("In function call getUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findByIdAndUpdate(req.params.id,{ name:req.body.name,
        gender:req.body.gender,
        age:req.body.age,
        city:req.body.city,

    }) 
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

const getUsersByAge=(req,res)=> //patch is basically used to update a particular entry and update is use to update the entire entry
{
    console.log("In function call getUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.aggregate
    (
        [{$match:{"age":"20"}}]
    )

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
