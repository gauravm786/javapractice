//import importcore from '../core.js'
//importcore.isEven(10)
/*
//this is the standard way of coding
import http from "http"

//created a server

const server=http.createServer()

//events //for executing events

server.on('request',myfunc)

function myfunc(request,response)
{
console.log("My app got started")
response.writeHead(300,{"content-Types":"text/plain"}) //response.writeHead opens stream and send data continuously,it basically opens a pipe from your application to the front end part,so that you can continuously send data from string 
response.write("Hello New World")
response.end()//it is basically used to stop the stream
}
server.listen(8888)
*/

/* it is executed two times because whole function is executed two times,the whole function is execued twice by browser
My app got started
My app got started
*/


//to check request

//this is the standard way of coding
import http from "http"

//created a server

const server=http.createServer()

//events //for executing events

server.on('request',myfunc)

function myfunc(request, response)
{
console.log("Request:    ", request.url)
response.writeHead(300,{"content-Types":"text/plain"}) //response.writeHead opens stream and send data continuously,it basically opens a pipe from your application to the front end part,so that you can continuously send data from string 
response.write("Hello New World")
response.end()//it is basically used to stop the stream
}
server.listen(8888)

/*
Request:     /     (initially it is local host only)
Request:     /favicon.ico (sending one more request to te node application)
so two request is hit by the browser to our node application
*/



