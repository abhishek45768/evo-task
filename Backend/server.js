const express= require("express");
const { default: mongoose } = require("mongoose");
const  Notes  = require("./models/Notes");
const cors =require("cors")

const corsOptions = {
  origin: '*',
};

let app=express();
app.use(cors(corsOptions));
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/evolvantask").then(()=>console.log("db connected")).catch((err)=>console.log(err))

app.post("/api/add-note",(async(req,res)=>{
    try {
        const {title="a",content="n"}=req.body;
        console.log("title",title)
        console.log(req.body,"req.body")
        const newnote= await Notes.create({title,content});
        res.status(201).json({message:"Created  Successfully",data:newnote})
    } catch (error) {
     
        console.log(error,"err")
        return res.status(500).json({message:"server error"})
    }
}))
app.get("/api/get-note",(async(req,res)=>{
    try {
       
        const data= await Notes.find();
        res.status(201).json({message:"data faeched !",data:data})
    } catch (error) {
     
        console.log(error,"err")
        return res.status(500).json({message:"server error"})
    }
}))

app.get("/",(req,res)=>{
    res.status(200).send("server runing ")
});


app.listen(5000,()=>{
    console.log("server runing");
})