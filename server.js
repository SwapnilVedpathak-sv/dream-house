const express = require('express')
const mongoose = require ("mongoose")
const compression = require('compression')
const app = express()
const path = require("path")
const cors = require('cors')
const header = require("./middleware/header")
const Student = require("./models/students")
require("./db/conn")
const PORT = process.env.PORT || 8000;

require('dotenv').config();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.static('./dist/dream-house'))
app.use(cors({origin: '*'}))
app.use(header)
app.use(compression())


// Post Request For Create Student

app.post("/students", ( req, res ) =>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

// Get Request For All Student

app.get("/studentData", async( req,res ) => {
    try{
        const getStudentsData = await Student.find();
        console.log(getStudentsData);
        res.send(getStudentsData);
    }catch(e){
        res.send(e);
    }
})

// Get Request For Only Single Student

app.get("/studentData/:id", async( req,res ) => {
    try{
        const _id = req.params.id;
        const singleStudentData = await Student.findById(_id);
        res.send(singleStudentData);
    }catch(e){
        res.send(e);
    }
})

// Put Request For Update Specific Student

app.put("/students/:id", async( req,res ) => {
    try{
        const _id = req.params.id;
        const putRequest = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(putRequest);
    }catch(e){
        res.send(e);
    }
})

// Patch Request For Update Specific Student

app.patch("/students/:id", async( req,res ) => {
    try{
        const _id = req.params.id;
        const patchRequest = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(patchRequest);
    }catch(e){
        res.send(e);
    }
})

// Delete Request For Delete Specific Student

app.delete("/students/:id", async( req,res ) => {
    try{
        const _id = req.params.id;
        const deleteRequest = await Student.findByIdAndDelete(_id)
        res.send(deleteRequest);
    }catch(e){
        res.send(e);
    }
})

app.listen(PORT, () => {
    console.log(`Connection is setup at ${PORT}`);
})
