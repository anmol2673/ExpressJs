const m=require("fs")
m.writeFile("a.txt","Welcome to hell",function(err){
    if(err){
        console.log("error occured")
    }else
        m.readFile("a.txt",function(err,data){
            if(err){
                console.log("file not found")
            }
            else{
                console.log(data.toString())
            }



        })
    })

m.writeFileSync("a.txt","writing in the file")
var n=m.readFileSync("a.txt")
console.log(n.toString())
