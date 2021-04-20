
/*
function printval()   //[Arguments] { '0': 'Aniket', '1': 12, '2': 122 }
{
    console.log(arguments)
}
printval("Aniket",12,122)
//the data which is printed from this particular argument is in the form of object
*/    

//npm is used to manage or mantain node modules
//to enabling the npm to use inside our project,we need to use first command npm init
//in package.json name and version is important,it is similar to object(key:value) which include keys and value
//the keys and values can be in the form of string,boolean,integer,float,array,sub part of json
//you can also use one json inside another json
//if you are sending data from front end to back end,so in that request data will be send in form of json
//and whatever response you will be getting from backend to frontend that response will also be in form of json
//json is just a file format,so its the way we store data inside it

/*
{
    "name": "myapp",       //application name
    "version": "1.0.0",    //version o f our newly created application
    "main": "index.js",
    "scripts": {           //script is very important it tells machine what to do
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "keywords": [],
    "description": ""
  }
*/

/*
dev means develop
prod means production
eslint will check whether the syntax is correct or not 
*/

/*
console.log(arguments)
*/  

/*
//wrapped inside a function IIFE(immediately invoked function expression)
//(function(exports,require,module,__filepath,__dirname)){
  exports.name="Gaurav"
  console.log(arguments)
  //reurn exports
  //})()
  */

 /*
   exports.name="Gaurav"
   console.log(arguments)
*/
 
/*2.
  exports.name="Gaurav"
  console.log("Hey,i got executed only one time") //from previous class
  */
//wrapped inside a function IIFE(immediately invoked function expression)
//(function(exports,require,module,__filepath,__dirname)){
  //exports.name="Gaurav"
  //console.log(arguments)
  //console.log("hey,i got executed only one time")
  //reurn exports
  //})()

  /*3.
  exports.name="Gaurav"
  console.log("Hey,i got executed only one time") //from previous class
  */
//wrapped inside a function IIFE(immediately invoked function expression)
//(function(exports,require,module,__filepath,__dirname)){
  //exports.name="Gaurav"
  //console.log(arguments)
  //console.log("hey,i got executed only one time")
  //reurn exports
  //})()
 
  /*4. 
   module.exports=(x)=>
  {
      if (x%2==0) 
      {
          console.log("its even")
      }
      else
      {
          console.log("its odd")
      }
  }
  */    

  //if you want to use multiple exports

//5. 6.
module.exports=
{
  isEven:(x)=>
  {
      if (x%2==0) 
      {
          console.log("its even")
      }
      else
      {
          console.log("its odd")
      }
  },
    en:(x)=>
    {
        if (x%2==0) 
        {
            console.log("its even")
        }
        else
        {
            console.log("its odd")
        }
    },
    notodd:(x)=>
    {
        if (x%2==0) 
        {
            console.log("its even")
        }
        else
        {
            console.log("its odd")
        }
    },
    Even:(x)=>
    {
        if (x%2==0) 
        {
            console.log("its even")
        }
        else
        {
            console.log("its odd")
        }
    }
}

















































































































































































































