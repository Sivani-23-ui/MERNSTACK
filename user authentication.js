const ex = require("express")
const app = ex()

app.use(ex.urlencoded({extended:true}))

let u = "admin"
let p = "123"

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/login.html")
})

app.post("/log",(req,res)=>{

    if(req.body.u==u && req.body.p==p)
    {
        res.send("Login Success")
    }
    else
    {
        res.send("Login Failed")
    }

})

app.listen(3000,()=>console.log("Run"))