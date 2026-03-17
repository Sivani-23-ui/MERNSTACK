const ex = require("express")
const ses = require("express-session")

const app = ex()

app.use(ses({secret:"x"}))

app.get("/",(req,res)=>{

    if(!req.session.c)
    req.session.c=1
    else
    req.session.c++

    res.send("Count: "+req.session.c)

})

app.listen(3000)