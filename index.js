const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const path=require('path')
const MainRouter=require('./routes/mainroute')
const { buildQueries } = require('@testing-library/dom')
const PORT =process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use('/',MainRouter)

const MongoUrl='mongodb://localhost:27017/mernprojectreal'
const MongoOnline='mongodb+srv://dbblog:carson@cluster0.nffyb.mongodb.net/dbblog?retryWrites=true&w=majority'
mongoose.connect(MongoOnline||MongoUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err)
    console.log("yes connected to mongo");
    else
    console.log("not connected")
})

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>console.log(`Running on ${PORT}`))