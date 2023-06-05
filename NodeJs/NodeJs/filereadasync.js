const m=require("fs")
m.readFile("abc.txt",function(err,data){
if(err){
    console.log("error occured")
}
else{
    console.log(data.toString())
}
})
m.readFile("abcd.txt",function(err,data){


if(err){
console.log("err occured")
}
else{
    console.log(data.toString())
}

})
console.log("welcome to all");
var s=m.readFileSync("jkl.txt");
console.log(s.toString);