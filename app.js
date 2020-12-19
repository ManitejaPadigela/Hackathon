
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:"true"}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/sign-in.html");
});

app.post("/failure",function(req,res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000,function(){     
    console.log("Server is running..");
});
