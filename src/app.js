const express = require ('express')
const mongoose = require ('mongoose')
const dotenv = require ('dotenv')
const app = express();
dotenv.config();
app.use(express.json());
app.get ("/",(req,res)=>{
    res.send("Home");
});
    app.get ("/register",(req,res)=>{
        res.send("Login");
});
app.post("/reg",(req,res)=>{
    res.send("Start")
});
app.post("/login",(req,res)=>{
    console.log(req.body);
    const{email,password}=req.body;
    if(password=="iniyasha@29"){
        res.send("login successful");
    }
    else{
        res.send("password incorrect");
    }
    // res.send("Login successful");

});

app.use("/api",require("./routes/auth"))

app.use("/reji",require("./routes/reg"))

mongoose.connect(process.env.DB).then(()=>{
    console.log("Connected");
}).catch(err=>{
    console.log("not connected");
})
app.listen (5000,()=>{
    console.log("Server listening at port 5000");
});