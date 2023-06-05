const http=require("http");
const b=require("url");
var server=http.createServer(function(req,resp){
var q=b.parse(req.url,true);
console.log(q)
resp.writeHeader(200,{"content-type":"text/html"})
switch(q.pathname){
case "/home":
    resp.write("Welcome to home");
    resp.end();
    break;
case "/aboutus":
    resp.write("what do you wnat to know")
    resp.end();
    break;
default:
    resp.write("what do you want")
    resp.end()
    break;
}

})
server.listen(3005,console.log("Server is ready to run"))