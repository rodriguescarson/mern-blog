const express = require('express')
const route = express.Router()
const User = require('../model/user')
const Blog = require('../model/postsmode')

//register route
route.post('/register', (req, res) => {
    let register = new User(req.body)
    register.save()
        .then((err, docs) => {
            if (err)
                res.send(err)
            else
            res.send("Succesfully Registerd")
        })

})

//login route
route.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(found => {
            console.log("user exists");
            if (found.password === req.body.password) {
                res.send("1")
            } else {
                res.send("0")
            }
        })
        .catch((err) => res.send("user not founds"))
})

//post route

route.get('/posts',(req,res)=>{
    Blog.find((err,data)=>{
     if(err)
     res.send(err)
     else
     res.send(data)   
    })
})

//add post
route.post('/add-post',(req,res)=>{
    let adding= new Blog(req.body)
    adding.save()
    .then((err,docs)=>{
        if(err)
        res.send("Try again!!")
        else
        res.send("Congrats post has been added")
    })
})

module.exports = route