/*13th March
datatypes
 2 types of datatypes - 1.primitive data type (Numbers-1,2,3,1,1, String- "Rajan", boolean- true and false)
                        2.Non primitive data types(object, array, etc)
//mostly data are stored into variable.for ex: Numbers, String, boolean, undefined
//Type coercion (auto-conversion)
//conditions
//loops
//object {data of different primitive data typess}

/*
1.boolean
    //var isvalid = "Gaurav";
    //console.log(isvalid)   //Gaurav

    //var isvalid = "Gaurav";
    //isvalid=true;
    //console.log(isvalid)   //true

     //var isvalid = "Gaurav";
     //isvalid=true;
     //isvalid=12
     //console.log(isvalid)   //12

    //var isvalid = "Gaurav";
    //isvalid=true;
    //isvalid=12
    //isvalid=13
    //console.log(isvalid)   //13
   
   //var name;
   //console.log(name)       //undefined
*/


//object
//var variable_name = {key: value,key2: value2,....,key10:value10}
//var student={Name:"Gaurav",Address:"Google",RollNumber:12,isGraduated:false};
//console.log(student)      //{Name:'Gaurav',Address:'Google',RollNumber:'12',isGraduated:false}

//var student={Name:"Gaurav",Address:"Google",RollNumber:12,isGraduated:true,12:123};
//console.log(student)
//console.log(student.Name)
//console.log(student.Address) 
//console.log(student.RollNumber)
//console.log(student.isGraduated)
//console.log(student[12])  //{Name:'Gaurav',Address:'Google',RollNumber:'12',isGraduated:false}|Gaurav|Google|12|true|123

//var student={Name:"Gaurav",Address:"Google",RollNumber:12,isGraduated:true,12:123};
//console.log(student)
//console.log(student.Name)
//console.log(student.Address) 
//console.log(student.RollNumber)
//console.log(student.isGraduated)
//console.log(student[12])

//NULL 

/*null is used in term with objects (if object doesnt get  assigned to a particular variable,
in that case null is assigned to it automatically)*/
/*undefined means that particular variable is not assigned to any datatype*/ // student is a reference variable
//student=null
//console.log(student)
//student=undefined
//console.log(student)

//var name1 = null; //empty(not undefined) //reference variable:- a variable  used to assign object
//var name1 = null;
//var first=10+30+"Rohan"
//console.log(first)      //40Rohan

//type coercion(auto conversion of one datatype to another)
//first="Rohan"+10+30
//console.log(first)      //Rohan1030

//var name1 = null;
//var first=true+10+30+" Rohan"//because true=1 and false=0
//console.log(first)           //41 Rohan 

//is there is a way to skip lines based on some condition,yes,by using condition. 
 
// // CONDITIONS

//1.IF

/*
if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
*/

//var number = 101;                          //if number=10,then it is even number 
/*
if (number%2==0){                          //if number=101,then it is odd number
    console.log(number+" is even number")
}
if (number%2!=0){
    console.log(number+" is odd number")
}
*/

 //2.IF ELSE

/*
if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
else{
    //statement-11
    //statement-12
}
*/

//var number = 101;                          //if number=10,then it is even number 
//if (number%2==0){                          //if number=101,then it is odd number
//    console.log(number+" is even number")  //"="is assignment operator
// }                                         //"=="is comparison operator
//else {                                     //name1==name2(only value will be compared)
//    console.log(number+" is odd number")   //name1===name2(value will be compared and datatype will also get compared)
//}

//3.IF ELSE-IF ELSE
/*
if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
else if(condition){
    //statement-11
    //statement-12
}
else{
    //statement-21
    //statement-22
}
*/

//var number=9                                                //if number is 9,9 is smaller than 10
//{                                                           //if number is 10,10 is equal to 10
//    if(number>10)                                           //if number is 11,11 is greater than 10
//    {
//        console.log(number+ " is greater than 10")
//    }else if(number<10)
//    {
//        console.log(number+ " is smaller than 10")
//    }else
//    {
//        console.log(number+ " is equal to 10")
//    }
//} 

//3.NESTED IF-ELSE
/*
IF(CONDITION)
{
if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
else if(condition){
    //statement-11
    //statement-12
}
else{
    //statement-21
    //statement-22
}
}
ELSE{
    if (condition){
    ....//statement-1
    ....//statement-2
    ....
    ....
}
else if(condition){
    //statement-11
    //statement-12
}
else{
    //statement-21
    //statement-22
}
}
*/

/*
var number=111;                                //if number=111,111 is greater than 10,111 is odd number                     
if(number%2==0)                                //if number=101,101 is equal to 101,101 is odd number                 
{                                                           
    if(number>10)                                           
    {
        console.log(number+ " is greater than 10")
    }
    else if(number<10)
    {
        console.log(number+ " is smaller than 10") 
    }
    else
    {
        console.log(number+ " is equal to 10")
    }
    console.log(number + " is even number")
} 
else
{
    if(number>101)
    {
        console.log(number+ " is greater than 101")
    }
    else if (number<101)
    {
        console.log(number+ " is smaller than 101")         
    }
    else
    {
        console.log(number+ " is equal to 101")
    }
    console.log(number + " is odd number")
}
*/

/*
4.SWITCH STATEMENT
switch(expression-1)
{
    case codition-1:
    statement-1;
    statement-2;
    statement-3;
    break;
    case codition-2:
    statement-1;
    statement-2;
    statement-3;
    break;
    case codition-3:
    statement-1;
    statement-2;
    statement-3;
    break;
    case default:
    statement-1;
    statement-2;
    statement-3;   
    
    break statement is used to get out of the block.(break)
}
*/

/*
month=1                                  //if month=5...12,We have only 3 months data,Only jan,feb and march
switch(month)
{
    case 1:
        console.log("winter")
        console.log("jan") 
        break
    case 2:
        console.log("winter")
        console.log("feb") 
        break  
    case 3:
        console.log("lil winter")
        console.log("march") 
        break
    default:
        console.log("We have only 3 months data")
        console.log("Only jan,feb and march") 
               
}
*/

/*
5.Ternary operator:-
expression-1?"expression-2":"expression-3"; 
if expression-1 is true then expression-2 is executed,if false then expression-3 is executed
*/

//var marks=42                  //pass
//var result=marks<40?"fail":"pass"
//console.log(result)

// //loops are of 3 types:-

/*
1.while loop:-
while(condition)
{
    statement1
    statement2
}
*/

/*
count=3                        //while(condition):in this condition is checked until it become false and then loop is ended
while(count>0)                 //if count=count-1 is not used then "hello world" is printed infinite time.to stop this rep count=count-1 is used 
{                              //there is no limitation                                                                                  
    console.log("hello world")
    
}
*/
                                //count=count-1 
/*                             //3>0 true "hello world" is printed and then 3-1=2 because of count=count-1  
count =3                       //2>0 true "hello world" is printed and then 2-1=1 because of count=count-1
while(count>0)                 //1>0 true "hello world" is printed and then 1-1=0 because of count=count-1
{                              //0>0 false and then execution goes out of the loop and execution is stoped
    console.log("hello world")
    count=count-1

}
*/

/*
count=3                                 //if(count==0) then value of 0 is "while loop is ended"
while(count>0)                          //console.log("value of count is "+ count) then value of count is counted
{
    console.log("hello world")
    count=count-1
    console.log("value of count is "+ count)
    if (count==0) 
    {
    console.log("while loop is ended")    
    }
}
*/

//2.do-while loop
/*
do
{
    statement-1
    statement-2
}
while(condition)
{
    statement1
    statement2
}
*/
/*
var count=3
do
{
    console.log("hello world")
    count=count-1
    console.log("value of count is "+ count)
    if (count==0) 
    {
    console.log("while loop is ended")    
    }
}while(count>0)
*/

/*
1.while loop:-                                      
1)first condition is checked
2)code gets executed if condition is true
3)go to 1(beginning of code)

2.do while loop:-
1)first code gets executed
2)condition is checked
3)go to 1 if condition is true,if condition is false then execution is stopped and get out of the loop
*/ 
//13th march end

/*14 March
count=3
var cc;
while(cc)                                                            //value is undefined
{                                                                    //no output
    console.log("Hi")
}
*/

/*
while(null)                                                          //value is null
{                                                                    //no output
    console.log("h1")
}
*/

/*
while(false)                                                         //value is false // false value is never passed in while loop
{                                                                    //no output
   console.log("Hello")
}
*/

/*
while(0)                                                             //value i 0
{                                                                    //no output
    console.log("h2")
}
*/

/*
while("")                                                            //value is string
{                                                                    //no output               //null,false,0 is false value
    console.log("h3")                                                                                                   
}
*/

/*
while(1.2)                                                            //value is true(float number)
{                                                                     // h3 is printed infinity times
    console.log("h3")
}
*/

/*
console.log(2/0)                                                       //value is true,Infinity is printed as output
cc=2/0                                                                   //value is true,h4 is printed infinity times                                                                
while(cc)       
{
    console.log("h4")
}
*/

/*3.for loop:-
for(expression-1;expression-2;expression-3)              //exprresion-1 is initialization,initialize a variable,using this we can control no.of execution,e.g count=3
{                                                        //expression-2 is condition 
    statement 1                                          //expression-3 is increment/decrement
    statement 2
    .....
    .....
}
*/

/*
for(var i=0;i<4;i=i+1)                            //i=i+1                       
{                                                 //0<4 true "hello x" is printed and then 0+1=1 because of i=i+1
    console.log("hello X " + i)                   //1<4 true "hello x" is printed and then 1+1=2 because of i=i+1
}                                                 //2<4 true "hello x" is printed and then 2+1=3 because of i=i+1
console.log("done")                               //3<4 true "hello x" is printed and then 3+1=4 because of i=i+1                                                
                                                  //4<4 false and then execution goes out of the loop and execution is stopped

for(var i=1;i<4;i=i+1)                            //i=i+1                    
{                                                 
console.log("hello X " + i)                       //1<4 true "hello x" is printed and then 1+1=2 because of i=i+1
}                                                 //2<4 true "hello x" is printed and then 2+1=3 because of i=i+1
console.log("done")                               //3<4 true "hello x" is printed and then 3+1=4 because of i=i+1                                                
                                                  //4<4 false and then execution goes out of the loop and execution is stopped                                                  

var i=0                                           //i=i+1
for(;i<4;)                                        //0<4 true "hello x" is printed and then 0+1=1 because of i=i+1           
{                                                 //1<4 true "hello x" is printed and then 1+1=2 because of i=i+1
console.log("hello X " + i)                       //2<4 true "hello x" is printed and then 2+1=3 because of i=i+1
i=i+1                                             //3<4 true "hello x" is printed and then 3+1=4 because of i=i+1     
}                                                 //4<4 false and then execution goes out of the loop and execution is stopped                            
console.log("done")     

var i=0
for( ; ; )                                        //it will go to infinity as there is no condition,ctrl + c is used to get out of infinity                                       
{                                                 
console.log("hello X " + i)                       
}                                                 
console.log("done")                                                                               
*/

/*difference between while loop and for loop:-
In while loop condition is known but no .of repition(increment/decrement) is not known and hence count is used in while loop 
seperately but in for loop initialisation,condition and increment/decrement is done simultaneously no count is needed.
*/ 

/*

// //Function is used for redundancy(reduction) of code
syntax of the function

function name_of_your_function()
{
    statement-1
    statement-2
    statement-3
    statement-4
    statement-5
}
*/
//step1:-create function and step2:-create variable
/*
printNum()         
printNum()
printNum()
printNum()
printAlpha()
printAlpha()
printAlpha()
printAlpha()

function printNum()  //1|2|3|4|1|2|3|4|1|2|3|4|1|2|3|4|A|B|C|D|A|B|C|D|A|B|C|D|A|B|C|D
{                                                       
    console.log("1")          
    console.log("2")
    console.log("3")
    console.log("4")
}
function printAlpha()
{
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
}
*/

/*
var num=12               
if(num==12)
{
    console.log("it's 12")
    printAlpha()
    console.log("Done")
}
else
{   console.log("it's not 12")
    printNum()
    console.log("Not Done")
}

function printNum()         //it's 12
{                           //A
    console.log("1")        //B
    console.log("2")        //C
    console.log("3")        //D
    console.log("4")
}
function printAlpha()
{
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
}    
*/

/*
var num=12               
if(num==11)
{
    console.log("it's 12")
    printAlpha()
    console.log("Done")
}
else
{    
    console.log("it's not 12")
    printNum()
    console.log("Not Done")
}

function printNum()          //it's not 12
{                            //1
    console.log("1")         //2
    console.log("2")         //3
    console.log("3")         //4
    console.log("4")
}
function printAlpha()
{
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
}    
*/

/*
var num=12                  //it's 12    
if(num==12)                 //1
{                           //A
    console.log("it's 12") //2
    printNum()             //Done
    console.log("Done")
}
else
{    
    console.log("it's not 12")
    printAlpha()
    console.log("Not Done")
}

function printNum()          
{                            
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha()
{
    console.log("A")
   
} 
*/

/*
var num=12                      //4
cc()                            //it's 12
if(num==12)                     //4
{                               //1
    console.log("it's 12")      //4
    printNum()                  //A 
    console.log("Done")         //4
}                               //2
else                            //Done
{                               
    console.log("it's not 12")
    printAlpha()
    console.log("Not Done")
}

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha()
{
    cc()
    console.log("A")
    cc()
} 
function cc()
{
    console.log("4")
}
*/

//To pass the message
//from wherever you are calling the function,you also need to pass the message

/*
var alpha="hello" //output:-hello
printAlpha(alpha) //while calling the function message is passed

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha(input) //()inside this is paramater
{
    
    console.log(input)
    
} 
function cc()
{
    console.log("4")
}
*/

/*
var alpha="hello" //output:-can't do anything for you(bcause num is not defined while calling function)
printAlpha(alpha) //while calling the function message is passed

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha(input, num) //()inside this is paramater
{if(num==2) 
{ 
    console.log(input)
    
}
else
{
    
    console.log("can't do anything for you")
    
} 
}
function cc()
{
    console.log("4")
}
*/

/*
var alpha="hello" //output:-can't do anything for you(bcause num  is not equal to 2 while calling function)
printAlpha(alpha,12) //while calling the function message is passed

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha(input, num) //()inside this is paramater
{if(num==2) 
{ 
    console.log(input)
    
}
else
{
    
    console.log("can't do anything for you")
    
} 
}
function cc()
{
    console.log("4")
}
*/

/*
var alpha="hello" //output:-hello(bcause num  is  equal to 2 while calling function)
printAlpha(alpha,2) //while calling the function message is passed

function printNum()          
{   
    cc()                         
    console.log("1")         
    printAlpha()         
    console.log("2")
}
function printAlpha(input, num) //()inside this is paramater
{if(num==2) 
{ 
    console.log(input)
    
}
else
{
    
    console.log("can't do anything for you")
    
} 
}
function cc()
{
    console.log("4")
}
*/

//14th march end


//20 March

//Arrowfunction

/*1st way to create a function
cc()                  //calling the function
function cc()         //declare the function
{
    console.log(4)
}
*/

//we call function a first class object,we can use function as datatype

/*2nd way to create a function,here hi is an object because we call function a first class object
var hi=function(message)//This is anonymous function(anonymous which does not have name)
{
 console.log(message)
}
hi("hello")
*/

/*3rd way to create a function(Arrowfunction) 
hi =(message) =>{console.log(message + " world")} //This is the body of arrow function
hi("hello")
*/

/*4th way to create a function(special case it has one statement only)
hi =(message) =>console.log(message + " world") //This is the body of arrow function,
if there is one statement in the body of the function of arrow function then you can remove curly braces
hi("hello")
*/

/*5th way to declare a function(without using parenethesis)
hi = message =>console.log(message+" world")
hi("hello")
*/

/*
function hi(message)//2         //world(you called the function with message),control will flow from 50 to 44 and then 46
{
    console.log(message)//3
    return "hi"                  
}

hi(" world")//1
*/
/*
function hi(message)//2       //world(you called the function with message),control will flow from 50 to 44 and then 46
{
    console.log(message)//3
    return "hi"               // returning a value hi and to catch this variable we need to assign new variable
}

var mess =hi(" world")//1   //whatever value which is returned from this function[hi("world")] will be assigned to mess variable
console.log(mess)
*/

/*
function hi(message)//2         //world 
{
    console.log(message)//3
    
}

var mess=(" world")/1
console.log(mess)
*/

/*
function hi(message)//2         //world 
{                               //udefined because return hi is not used and return is used to get out of the function
    console.log(message)//3
    
    
}

var mess=hi("world")//1
console.log(mess)
*/

/*
function hi(message)//2         //world 
{                               //hi is not used while assisging to mess variable 
    console.log(message)//3
    return  "hi"
    
    
}

var mess=("world")//1
console.log(mess)
*/

/*
function hi(message)            //world
{                               //[Function: hi] bcausse it is not written inside" "
    console.log(message)
    return hi

}

var mess = hi("world")
console.log(mess)
*/

/*
function hi(message)            //world
{                               //hi
    console.log(message)        //because control will go out of function as return is used,anything written return after will not be executed
    return "hi"
    console.log("yes")
    console.log("no")

}

var mess = hi("world")
console.log(mess)
*/

/*
function hi(message)            //world
{                               //yes
    console.log(message)        //no
    console.log("yes")          //hi
    console.log("no")
    return "hi"
}
var mess = hi("world")
console.log(mess)
*/

/*1st way
function hi(message)            //world
{                               //yes
    console.log(message)        //no      
    console.log("yes")          //undefined
    console.log("no")
}

var mess = hi("world")
console.log(mess)
*/

/*2nd way
var hi=function(message) //gaurav
{                        //9
 console.log(message)
 return 9
}
var mess = hi("gaurav")
console.log(mess)
*/

/*3rd way
hi =(message) =>{                             //hello world
    console.log(message + " world")           //9
    return 9
} 
var mess = hi("hello")
console.log(mess)
*/

/*4th way
hi =(message) =>console.log(message+" world") //valid
hi =(message) =>{return message} //valid
hi =(message) =>return message   //invalid
var mess = hi("hello")
console.log(mess)
*/

/*5th way
hi = message =>{return 9}         //9 
var mess = hi("world")
console.log(mess)
*/

/*
hi= ()=>{
   console.log(message +"world") 
    return 9}         //give error as there is nothing as a parameter
*/

/*
hi= ()=>{                          //message is not defined as error
 console.log(message+ "world") 
 return 9}  
hi()     
*/

/*
hi= ()=>{                      //world                     
    console.log("world") 
    return 9}  
   hi()  
*/

//return a function from a function(a function can be assigned to a variable)

/*
function hello(message)
{
    console.log(message)         //2 output hi is printed
    var world = function()       //               function() //here this is a body and this will be assigned to world variable and now we are returning world
    {                            //{console.log("message")}
    console.log("message")
    }
    return world        //world holds function()    //this body is assigned to w function   
}        // {console.log("message")} and then it is assigned to w variable and it becomes function also w function(){console.log("message")} 
 //and now w becomes function w=  function(){console.log("message")} and we call function use w()                           

w=hello("hi")//1 //you called a function hello()
w()           //you called w() function
/*
              function()    //this body is assigned to w function indirectly and directly to hello function
{console.log("message")}
*/
//at last we call w function with parenethesis like w()   
//w is a function because the function is returned from hello function 
//if we call w() then console.log("message") is called and data("message") gets printed
//whenever function is returned it will be assigned to new variable

/*
function hello(message)        //hi
{                              //[function: world]
    console.log(message)       //[function: world] here function is in the form of object
    var world = function()
    {
        console.log("message")
    }
    
    console.log(world)
    return world
}
w=hello("hi")
console.log(w)
*/


//include function inside object

/*
var student=
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
    12:123,
    details: function()
    {
       console.log("try to print details")
    }
};
student.details()
*/

//using this keyword you will be able access all the entity of your object
//this operater tells that which entity or attribute you want to use.
//this is a pointer pointing to the object

/*
var student=                //Gaurav,Google,12,true,123
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
    12:123,
    details: function()
    {
       console.log(this.Name)
       console.log(this.Address)
       console.log(this.RollNumber)
       console.log(this.isGraduated)
       console.log(this[12])
    }
};
student.details()
*/

 /*                                       //Gaurav Mishra
var student=
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
    12:123,
    details: function()
    {
       console.log(this.Name)
       console.log(this.Address)
       console.log(this.RollNumber)
       console.log(this.isGraduated)
       console.log(this[12])
    },
    getName: function(LastName)
    {
        return this.Name+" "+LastName
    }
};
var fullname=student.getName("Mishra")
console.log(fullname)
*/

//varletconst

/*3 ways for defining variable
1.var:-
you can create variable into global scope
2.let:-
it is local to the scope or block
3.const:-
here the reference variable value will be constant,you need to initialize the data while declaring it

*/

/*
for(var i=0;i<3;i++)       //0
{                          //1
    console.log(i)         //2
}
*/

/*
for(var i=0;i<3;i++)       //0 //var will execute outside the function and we get 3 as a output at end
{                          //1
    console.log(i)         //2
}                          //3
console.log(i)
*/

/*
for(let i=0;i<3;i++)       //0 //let is local to the block and it cannot be accessed out of the function
{                          //1
    console.log(i)         //2
}                          
console.log(i)             //and then error
*/

/*
for(let i=0;i<3;i++)       //0 //let is local to the block and it cannot be accessed out of the function
{                          //1
    console.log(i)         //2
}                          
*/

/*
{
    var ii = 0             //0
    console.log(ii)        //0
}
console.log(ii)
*/
//the reference of this variable is global in this case,it won't be fixed inside this block({})
//whenever you try to access value of var variable outside the block it will not give error
/*
{
    let ii = 0             //0
    console.log(ii)        //and then error
}
console.log(ii)
*/
//whenever you try to access value of let variable outside the block it will give error

/*
var i=10                //0 //initially we define i=10 but i=0 is defined inside for loop and we get output 0,1,2
for(var i=0;i<3;i++)    //1
{                       //2
    console.log(i)
}
*/

/*
var i=10                //0 //initially we define i=10 but i=0 is defined inside for loop and we get output 0,1,2,3
for(var i=0;i<3;i++)    //1
{                       //2
    console.log(i)      //3 
}
console.log(i)
*/

/*
var i=10            //0 //the value will get overwritten because the scope is global not local
{                   //0 //the scope of this variable is global not locl
    var i=0
    console.log(i)
}
console.log(i)
*/

/*
let i=10            //0  
{                   //10 
    let i=0
    console.log(i)
}
console.log(i)
*/                                

/*
const age;               //will show error
age=10                   //you need to initialize the data while declaring it
console.log(age)          //type error:- assignment to constant variable
*/

/*
const age =10        //10
console.log(age)
*/

/*
var i;               //10
i=10;
console.log(i)
*/

/*
let i                //10
i=10
console.log(i)
*/

/*
const age ;               //will show error
age=age+1                 //you need to initialize the data while declaring it
console.log(age)          //syntax error:-missing intializer in const declaration
*/

/*
const student=                //Rohan
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
}
student.Name="Rohan"
console.log(student.Name)
*/

/*
const student=                       //Gaurav              
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
}
student.Name="Rohan"
student1=                
{
    Name:"Gaurav",
    Add:"Google",
    rrr:12,
    aa:true,
}
console.log(student1.Name)
*/

/*
const student=                //Mishra Gaurav
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
}
student.LastName="Mishra"      //adding new atrribute to student object
console.log(student.LastName+" "+student.Name)
*/

//Array

/*
Array is collection of data,different data are allowed here
2 ways of declaring arrays

1.using []
example:-
var name=["Murali","Rohan","Rohit","Gaurav"]
0      1        2       3      
Murali,Rohan,Rohit,Gaurav are element of the array
Array is assigned as index(like 0,1,2,3)
Index will start from 0,negative index give undefined as output
Array is special type or refined type of an object
if array is created and some metod is already defined,then it is called as predefined method
Array and object store collection of data,array is special case and in array we have more feature of accessing data 
but object holds the classical way.array is just implementation of object
*/

/*
var named=["Murali",90,"Rohan","Rohit","Gaurav"] 
console.log(named[0])//Murali
console.log(named[1])//90
named.push("Rahul") //will add new element in array //["Murali",90,"Rohan","Rohit","Gaurav","Rahul"]
console.log(named)
console.log(named[-1])//undefined because index cannot be assigned in negative
console.log(named[named.length]) //undefined because im trying to assign data which is at index named.length 
console.log(named.length)//it will give length of array //5
console.log(named[named.length-1]) //Gaurav(it will show last element in the array)
*/

/*
var named=["Murali",90,"Rohan","Rohit","Gaurav"] //5,Gaurav,Rahul
console.log(named.length)
console.log(named[named.length-1])
named.push("Rahul")
console.log(named[named.length-1])
*/

/*
2.use new Array() //not recommended to use
ex:
var named=new Array ("Murali",90,"Rohan","Rohit","Gaurav") 
*/

/*
var named=new Array ("Murali",90,"Rohan","Rohit","Gaurav")   //5,Gaurav,Rahul
console.log(named.length)
console.log(named[named.length-1])
named.push("Rahul")
console.log(named[named.length-1])
*/
//20 March end

//21 march

//cpcv
//copy by value and copy by reference
//use function as a constructor 
// class in javascript
//object destrusturing
//copy by value holds primitive datatype
//copy by reference holds non-primitive datatype

/*
// copy by value //only value is copied
var a =10
var b=a
a=11
console.log(b)

//copy by reference 
var arr=[1,2,3,4,5]//whatever address arr hold will get assigned to brr variable,brr also gets alocated to same array
var brr =arr       //same reference is copied to both variable,using arr variable will also get refleced at brr
arr[0]=100//when we try to update 0th element as 100,so instead of 1 you make it as 100,that changes will also get reflected to brr
console.log(brr)//because both the variable are pointing to same address,when we try to print data of brr,you will get output as
//100 in 0th place,then after remaining data you have in arr
*/

/*
//initialise the attribute of the object
//use function as a constructor
function student(firstname,lastname,age,isgraduate)  //Gaurav
{
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.isgraduate=isgraduate
}
var student1= new student("Gaurav","Mishra","22",true) //an object will be created with past data parameter and will be assigned
//to reference variable student1,reference variable means variable pointing to object
//so student1 will possess an object and those object will have an entity firstname,lastname,age,isgraduate and all those value will be initialised
console.log(student1.firstname)
//values which are passed in var student1 will be copied to function student,all those will be assigned to this 
// this is pointing to object which is created by new operator(new student),so now new operator will try to create an object
//and this object will be refered inside student function(new student) and it will assign this number of attribute and the 
//value will be initialised to all the attribute of the object
//when try to put console.log(student1.firstname),you will get data from this particular object
*/

//object destrusturing
/*
function student(firstname,lastname,age,isgraduate)  //Gaurav,22,Gaurav
{
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.isgraduate=isgraduate
}
var student1= new student("Gaurav","Mishra","22",true)
console.log(student1.firstname)

function getdetail(student1)
{
    var details=[student1.age,student1.firstname,student1.lastname,student1.isgraduate]
    return details
}
var d= getdetail(student1)
console.log(d[0])
console.log(d[1])
*/

/*
function student(firstname,lastname,age,isgraduate)  //Gaurav,Mishra,Gaurav
{
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.isgraduate=isgraduate
}
var student1= new student("Gaurav","Mishra","22",true)
console.log(student1.firstname)

function getdetail(student1)
{
    var details=[student1.age,student1.firstname,student1.lastname,student1.isgraduate]
    return details
}
var [,name,last]=getdetail(student1)
console.log(last)
console.log(name)
*/

//split a string into substrigs using the specified separator and return them as array 
//.split is a function of string which basically splits your data with parameter(with whatever parameter are passed),here space is
//passed inside the parameter,so whole data will spreaded into two part or multiple part(if there are multiple spaces) and array
//of this data will return,it is used when we dont want use data from index

/*
var[first,last]="Gaurav Mishra".split(" ")
console.log(first)
console.log(last)
*/
//class:mobile,blueprint(size.color,keys,mic) means feature(size.color,keys,mic)
//with this blueprint we will have multiple object of different properties 
//e.g:-car is class and maruti,swift are object 
//e.g:-mobile is class,iphone and realme are object

//Mapreducefilter

/*                     //[4,16,25,36,49]
var arr=[2,4,5,6,7]
for(i=0;i<arr.length;i++)
{
    arr[i]=arr[i]*arr[i]
}
console.log(arr)
*/

/*
var arr=[2,4,5,6,7]        //[2,4,5,6,7] 
console.log(arr)           //[4,16,25,36,49]
for(i=0;i<arr.length;i++)
{
    arr[i]=arr[i]*arr[i]
}
console.log(arr)
*/

//now use map 


/*
Map:-
A function that accepts up to three arguments.
 The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/

//1.1st way to define map 

/*
function sqr(num)                 //[4,9,16,25,36,49,64,81]
{
    return num*num
}
var arr=[2,3,4,5,6,7,8,9]
console.log(arr.map(sqr))
*/

//2.2nd way to define map

/*
function sqr(num)                 //[4,9,16,25,36,49,64,81]
{
    return num*num
}
var arr=[2,3,4,5,6,7,8,9]
dd=arr.map(sqr)
console.log(dd)
*/

/*
var arr=[1,2,3,4,5,6,7,8,9]       //[2,4,6,8]
var even_arr=[]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        even_arr.push(arr[i])
    }
}
console.log(even_arr)
*/

//now use filter

/*2.Filter:-
A function that accepts up to three arguments. 
The filter method calls the predicate function one time for each element in the array.
Returns the elements of an array that meet the condition specified in a callback function.
filter works on true and false condition
*/

/*
function even(num)         //[2,4,6,8]
{
    iseven=false
    if(num%2==0)
    {
        iseven=true
    }
    return iseven
}
var arr1=[1,2,3,4,5,6,7,8,9]
console.log(arr1.filter(even))
*/

/*
var arr=[1,2,3,4,5,6,7,8,9]        //362880
var prod=1
for(let i=0;i<arr.length;i++)
{
    prod=prod*arr[i]
}
console.log(prod)
*/

//now use reduce

/*3.Reduce:-
A function that accepts up to four arguments. 
The reduce method calls the callbackfn function one time for each element in the array.
Calls the specified callback function for all the elements in an array. 
The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
*/

/*
function prodofallnumber(a,b)               //362880
{
  return a*b
}
var arr=[1,2,3,4,5,6,7,8,9] 
console.log(arr.reduce(prodofallnumber))

//class in javascript


//constructor:-To have different attribute inside class,constructor is used

/*
class student                                             //gaurav,gaurav,google,12,false
{
  constructor(name,address,rollnumber,isgraduated)
  {
    this.name=name
    this.address=address
    this.rollnumber=rollnumber
    this.isgraduated=isgraduated
  }
  details()
    {
       console.log(this.name)
       console.log(this.address)
       console.log(this.rollnumber)
       console.log(this.isgraduated)
    }
    getName(lastName)
    {
    return this.name+" "+lastName
    }
}
var student1= new student("gaurav","google",12,false)
console.log(student1.name)
student1.details()
*/

/*
class student{                                           //gaurav,gaurav,google,12,false,gaurav mishra
  constructor(name,address,rollnumber,isgraduated)
 {
    this.name=name
    this.address=address
    this.rollnumber=rollnumber
    this.isgraduated=isgraduated
  }
  details()
    {
       console.log(this.name)
       console.log(this.address)
       console.log(this.rollnumber)
       console.log(this.isgraduated)
    }
    getName(lastName)
    {
    return this.name+" "+lastName
    }
}
var student1= new student("gaurav","google",12,false)
console.log(student1.name)
student1.details()
var fullname=student1.getName("Mishra")
console.log(fullname)
//in classes we dont need function it(details,getName) can also be created without function
*/
//21 march end

//27 march

//callback.js

//comma operators
//x++ post increment,the value of x will be increnmented,but previous value of x(initial value of x) will be assigned to x
//++x pre increment,the value of x will be incremented first and then incremented value is assigned to x

/*
var x=10           //10
x=x++
console.log(x)

var x=10           //11
x=++x
console.log(x)

var x=10           //11 
x=++x //value is incremented i.e11
console.log(x++) //but here previous value is 11,we will get 11 as output

var x=10           //12 
x=++x //value is incremented i.e11
console.log(++x) //value is again incremented(previous value is 11),we will get 12 as output
*/

//now use comma operator //it is executed from left to right

/*
var x=10//11 //first value is assigned and then incremented,value is incremented after comma and it becomes then it is assigned to x
x=x++ ,x
console.log(x)
*/

/*
function returnNum(x)  //3 //initially x=1,then using x++ it is assigned and updated as 2,then using  ++x from 2 it is upated to 3
{                      //using x it will hold previous value 3,so output is 3(1,2,3,3)
    return x,x++,++x,x
}
result=returnNum(1)
console.log(result)
*/
/*
function returnNum()       //50 
{
    return 10,20,30,40,50
}
result=returnNum()
console.log(result)
*/

/*
function returnNum()       //[ 10, 20, 30, 40, 50 ]
    return [10,20,30,40,50]
}
result=returnNum()
console.log(result)
*/

//web app
// login 

//synchronous behaviour:-each request is executed one by one
//asynchronous behaviour:-each request is not executed one by one

/*
console.log("start")                   //first var is executed,then function in general
function login(username,password)      //in this case of asynchronous,output is start,random,End,user is authenticated
{                                      //first var is read,then console.log("start"),then function login,then set timeout
    returnData=function()              //then return random,then return end and after 5 sec "user is authenticated"
    {                                  //because using setTimeout returnData is executed
        console.log("user is authenticated")
        return "validated"
    }
    setTimeout(returnData,5000)
    return "random"
}
var isvalidated=login("gaurav","gaurav")
console.log(isvalidated)
console.log("End")
*/

/*
//callback function is used for asynchronous behaviour
var g=10 //1                  //output is 11,12,EndIn callback function,13
console.log("start")    //2               
function login()   //then we get inside the login   
{                                      
    returnData=function() //4 //it is initialised but not executed,returnData is initialised with login function           
     { //9 //after 5sec this whole function will come into picture,//9.2then it will try to get the latest global value(++g)
        console.log("In callback function")//9.1 //9.2 //the latest global value is 12,so it will try to increment 12 to 13
        console.log(++g) //9.2 //latest value is 13
    }
    setTimeout(returnData,5000) //5 //it will execute after 5 sec,it is halted for 5s
    return ++g //6 //it is initialised with var result
}
var result=login()//3 //then login is called,then we get inside the login //6 //the value which result will get is ++g i.e11
++g                //7 // it becomes 12,second time incremented
console.log(result) //6 //value is 11 //after calling
console.log(g)//7 //value is 12,after calling
console.log("End")//8
*/
/*
function_name=function() means we are assigning function_name with function
returnData=function()means we are assigining returnData with  function
clousure means passing a function into a function,to pass function into a function we use parameter
*/

//mylib.js

//module:-
/*To create our own module we use module.export.function_name=function_name
console,module and require are global object
*/

/*
function iseven(x)
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
function printarr(arr)
{
    console.log(arr)
}
module.exports.iseven=iseven
module.exports.printarr=printarr
//module and exports is a global object
//the above whole function is assigned with 
//here iseven,printarr is just a variable 
//using export will export =iseven part of function to whole context of your code
//so whenever you will try to import this part of thing(mylib) to some other part(app),then export is initialised with all this variable and value will be functions 
//module.exports.iseven=iseven
//module.exports.variable=function
//variable is assigned to function like this:-variablename=function()
//so whenever you are trying to import the module,the module object is initialised by these exported variables
//so if you want to use exported variable,you can use and basically you are accessing the functions in a directory 
*/

//http module is provided by node itself,so you dont need to pass the path,you can directly write the module name,so it will be imported and assigned to http variable

/*
var http=require("http")
http.createServer(myfunc).listen(8888)
*/

//app.js

/*
var features=require("./mylib")//this is basically user define module
features.iseven(10)
//code of mylib is imported to app.js
//to use module syntax is var varname=require(./path)
//so if you are usingyour own library then you have to give the path
*/
//27 march end

