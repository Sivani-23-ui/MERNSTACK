const express=require("express");
const bodyparser=require("body-parser");
const app=express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=> {
    res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
        Username: <input type="text" name="username"><br>
        Password: <input type="password" name="password"><br>
        <button type="submit">Login</button>
    </form>
`);
});

app.post("/login",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    if(username==="admin" && password==="password"){
        res.send("<h2>Login Successful! Welcome Admin </h2>");
    }else{
        res.send("<h2>Login Failed! Username or password</h2>");
    }
});

app.listen(4000,()=>{
    console.log("Server running on http://localhost:4000");
});