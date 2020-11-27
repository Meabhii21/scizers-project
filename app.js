var express =require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser=require("body-parser")
var User = require("./models/user");
var methodOverride=require("method-override");

mongoose.connect("mongodb+srv://abhishek:abhishek@blog.rsfnj.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride("_method"));

app.get("/",function(req,res){
    res.render("index");
});

app.post("/",function(req,res){
    var userInfo=req.body.user;
        User.create(userInfo,function(err,newuser){
            if(err){
                console.log(err);
                res.redirect("/contact");
            
            }else{
                res.redirect("/");
            }
        });
    
});

app.get("/contact",function(req,res){
    User.find({},function(err,users){
        if(err){
            console.log(err)
        }else{
            res.render("contact",{users:users});
        }
    });
});

app.get("/contact/:id/edit",function(req,res){
    User.findById(req.params.id,function(err,user){
        if(err){
            console.log(err);
        }else{
            console.log(user);
            res.render("show",{user:user});
        }
    });
});
app.put("/contact/:id",function(req,res){
    User.findByIdAndUpdate(req.params.id,req.body.profile,function(err,updateduser){
        if(err){
            console.log(err);
        }else{
            console.log(req.params.id,req.body.profile,updateduser);
            res.redirect("/contact");
        }
    });
});

app.delete("/contact/:id",function(req,res){
    User.findByIdAndRemove(req.params.id,function(err){
        if(err){
            console.log(err);
            res.redirect("/contact");
        }else{
            res.redirect("/contact");
        }
    });
});

function myFun(){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) { 
        alert("Value missing")
     }else{
         next();
     }
}
   
app.listen(process.env.PORT||3000,function(req,res){
    console.log("Server Started");
});