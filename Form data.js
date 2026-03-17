const ex = require("express")
const app = ex()

app.use(ex.urlencoded({extended:true}))

app.get("/",(req,res)=>{
res.send(`
<form method="post" action="/s">
Name: <input name="n">
<button>Send</button>
</form>
`)
})

app.post("/s",(req,res)=>{
    res.send("Name: "+req.body.n)
})

app.listen(3000)