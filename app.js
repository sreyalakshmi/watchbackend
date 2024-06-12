const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const{watchmodel}=require("./models/watch")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sreya:sreya123@cluster0.rk6cqoj.mongodb.net/watchdb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input=req.body
    let watch=new watchmodel(input)
    console.log(watch)
    watch.save()
    res.json({"status":"success"})
})
app.get("/view",(req,res)=>{
    watchmodel.find().then(
     (data)=>{
         res.json(data)
     }
    ).catch(
     (error)=>{
         res.json(error)
     }
    )
 })
 
app.listen(8080,()=>{
console.log("server started")
})