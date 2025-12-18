const mongoose = require("mongoose");
const Chat=require("./models/chat.js");

main().then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');
}

let allChats = [
  {
    from: "rahul",
    to: "neha",
    msg: "did you complete the assignment?",
    created_at: new Date()
  },
  {
    from: "priya",
    to: "rahul",
    msg: "please share the project files",
    created_at: new Date()
  },
  {
    from: "amit",
    to: "neha",
    msg: "can you send yesterday's notes?",
    created_at: new Date()
  },
  {
    from: "neha",
    to: "amit",
    msg: "I will send them in the evening",
    created_at: new Date()
  },
  {
    from: "rohit",
    to: "priya",
    msg: "are you coming to college tomorrow?",
    created_at: new Date()
  },
  {
    from: "priya",
    to: "rohit",
    msg: "yes, I will be there by 10",
    created_at: new Date()
  },
  {
    from: "suman",
    to: "neha",
    msg: "send me the maths formula sheet",
    created_at: new Date()
  },
  {
    from: "neha",
    to: "suman",
    msg: "okay, check your mail",
    created_at: new Date()
  },
  {
    from: "vikas",
    to: "rahul",
    msg: "did sir announce the exam date?",
    created_at: new Date()
  },
  {
    from: "vikas",
    to: "rahul",
    msg: "did sir announce the exam date?",
    created_at: new Date()
  }
];




