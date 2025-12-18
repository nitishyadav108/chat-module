const express=require("express");
const app=express();
const port=8080;
const mongoose = require('mongoose');
const path=require("path");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main().then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');
}

app.get("/chats",async (req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats});
});

app.get("/chats/create",(req,res)=>{
    res.render("create.ejs");
});

app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("chats"); 
});

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
     res.render("edit.ejs",{chat});
});

app.patch("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let newChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true});
    res.redirect("/chats");
});

app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});