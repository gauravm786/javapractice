//every record which will be stored inside the document that will be in the form of schema,schema is nothing but definition how it should look like
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema //new operator schema function(new Schema())
(
    {
        name:
        {
            type:String,
            required:true
        },
        gender:
        {
            type:String,
            required:true
        },
        age:
        {
            type:String,
            required:true
        },
        city:
        {
            type:String,
            required:true
        }
    },{timestamps:true}
)
export const User=mongoose.model('user',userSchema) //this was creating in database(collection),above we define schema,in this line user is used to create different model object thats why it is exported out  