const express = require("express");
const router = express.Router();
const connection = require("../db/databaseconnect")

router.get("/product", function (req, resp) {
    connection.query("select * from product", (err, data, fields) => {

        if (err) {
            resp.status(500).send("Data not found" + JSON.stringify(err))
        }
        else {
            resp.render("index", { pdata: data })
        }

    })

})

router.post("/insertEmployee",(req,resp)=>{
    var empid=req.body.empid
    var ename=req.body.ename;
    var sal=req.body.sal;
    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }
        else{
            resp.redirect("/employees")
        }
    })
})









// router.get("/displayaddform",(req,resp)=>{
// resp.render("add-products")
// })
// router.post("/addproducts",(req,resp)=>{
// var pid=req.body.pid;
// var pname=req.body.pname;
// var price=req.body.price;
// connection.query("insert into product values(?,?,?)",[pid,pname,price],(err,result)=>{
//     if(err){
//         resp.status(500).send("data not added"+JSON.stringify(err));
//     }else{
//         resp.redirect("/product")
//     }
// }

// )

// })



module.exports=router;







