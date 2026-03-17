const express = require('express');

const app = express();

const port = 3000;

// basic route
app.get('/', (req,res)=>{
    res.send("Home Page");
});

// route parameters
app.get('/user/:id', (req,res)=>{
    res.send("User ID: " + req.params.id);
});

// query parameters
app.get('/search', (req,res)=>{
    res.send("Search Query: " + req.query.name);
});

// POST method
app.post('/data', (req,res)=>{
    res.send("POST request received");
});

app.listen(port, ()=>{
    console.log("Server running on port " + port);
});