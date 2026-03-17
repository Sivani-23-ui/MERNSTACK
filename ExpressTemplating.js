const ex = require("express")
const app = ex()

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("page",{t:"Hello"})
})

app.listen(3000)