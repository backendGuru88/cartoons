const express = require('express');
const app = express();

// app.set("views", "views")
app.set("view engine", "ejs");
app.use(express.static('public'));




app.get('/', (req,res)=>{
    console.log("Server is running")
    // res.send("Hello World")
    res.render("index")
});  

app.get('/about',(req,res) =>{
    res.render("about")
});

app.listen(4000)