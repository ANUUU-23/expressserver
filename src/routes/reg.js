const express=require("express")

const router=express.Router();

router.post("/register/:id/:name",(req,res,next)=>{
    console.log(req.params.id);
    console.log(req.params.name);
  if(req.body.password=="15245"){
    next();
    console.log("ok");
  }
  else{
    res.send("Incorrect");
    console.log("incorrect");
  }
},(req,res)=>{
    res.send("success")
});


module.exports=router

