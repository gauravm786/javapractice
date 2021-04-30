var http=require("http")
function myfunc(request,response)
{
console.log("My app got started")
response.writeHead(300,{"content-Types":"text/plain"}) //response.writeHead opens stream and send data continuously,it basically opens a pipe from your application to the front end part,so that you can continuously send data from string 
response.write("Hello world")
response.end()//it is basically used to stop the stream
}
http.createServer(myfunc).listen(8888)
