const express=require("express");
const app=express();
const path=require("path");
const bodyparser=require("body-parser");
const routes=require("./router1/router")
//add middlewares

app.get(bodyparser.urlencoded({'extended':'true'}));

//config
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//url handlers
app.use("/",routes);

//start the server
app.listen(2555,console.log("server has started"));

module.exports=app;