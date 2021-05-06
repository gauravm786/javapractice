let users=[]//this will act as a user table(database)..later will replace this with DB call

export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)
}

export const createUser=(req,res)=>
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    res.send("ok")
}