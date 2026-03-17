const ex = require("express")
const mg = require("mongoose")

const app = ex()

mg.connect("mongodb://127.0.0.1:27017/test")

const s = new mg.Schema({
    n:String,
    a:Number
})

const M = mg.model("stu",s)

// CREATE
app.get("/add",async(req,res)=>{
    let d = new M({n:"Sam",a:20})
    await d.save()
    res.send("Added")
})

// READ
app.get("/get",async(req,res)=>{
    let r = await M.find()
    res.send(r)
})

// DELETE
app.get("/del",async(req,res)=>{
    await M.deleteOne({n:"Sam"})
    res.send("Deleted")
})

app.listen(3000)