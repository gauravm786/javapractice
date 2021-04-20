/*1.
require('./core')
*/

const { from } = require("core-js/core/array")


//if you use require inside js multiple times,it will show output one time only not multiple times

/*
require('./core')
require('./core')
require('./core')
require('./core')
require('./core')
*/

/*2.
var catchreturnedvalue=require('./core.js')
console.log(catchreturnedvalue)
*/

/*3.
var catchreturnedvalue=require('./core')
console.log(catchreturnedvalue.name)
*/

/*4.
require('./core.js')(10)
*/

/*5.
//to use multiple method of core.js use dot(.) operator
//1st way:-
//require('./core.js').notodd(11)
//2nd way:-
var lib=require("./core.js")
lib.isEven(19)
*/

//require dynamically attach/execute core.js file code to core2.js file
//import statisticaaly include codes while require dynamically includes code

//6.
//import is latest and widely used in react
import importcore from './core.js'
importcore.isEven(10)




















































































