const express = require('express')
const mongoose = require ("mongoose")
const compression = require('compression')
const multer = require('multer');
const app = express()
const path = require("path")
const cors = require('cors')
const header = require("./middleware/header")
const Expences = require("./models/expence")
require("./database/databaseConnection")
const PORT = process.env.PORT || 8000;

require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.static('./dist/dream-house'))
app.use(cors({origin: '*'}))
app.use(header)
app.use(compression())

var Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "assets");
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

const upload = multer({ storage: Storage })

// POST Request for Image Upload

app.post('/imageUpload', upload.single('file') , (req, res)=>{
    const file = req.file;
       
    var send = new Expences({

        paidBy:req.body.paidBy,
        toWhom:req.body.toWhom,
        date:req.body.date,
        amount:req.body.amount,
        description:req.body.description,
        imgUrl:file.filename
     })

    send.save().then(()=>{
        console.log(file.filename);
    }).catch((e)=>{
        console.log(e);
    })
    res.send(file)
 })

// Post Request For Create Student

app.post("/expences", ( req, res ) =>{
    const postRequest = new Expences(req.body);
    postRequest.save().then(() => {
        res.status(201).send(postRequest);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

// Get Request For All Student

app.get("/expences", async( req,res ) => {
    try{
        const getAllData = await Expences.find();
        // console.log(getExpencesData);
        res.send(getAllData);
    }catch(e){
        res.send(e);
    }
})

// Get Request For Only Single Student

app.get("/expences/:id", async( req,res ) => {
    try{
        const _id = req.params.id;
        const getSingleData = await Expences.findById(_id);
        res.send(getSingleData);
    }catch(e){
        res.send(e);
    }
})

// Put Request For Update Specific Student

app.put("/expences/:id", async( req,res ) => {
    try{
        const _id = req.params.id;
        const putRequest = await Expences.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(putRequest);
    }catch(e){
        res.send(e);
    }
})

// Patch Request For Update Specific Student

app.patch("/expences/:id", async( req,res ) => {
    try{
        const _id = req.params.id;
        const patchRequest = await Expences.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(patchRequest);
    }catch(e){
        res.send(e);
    }
})

// Delete Request For Delete Specific Student

app.delete("/expences/:id", async( req,res ) => {
    try{
        const _id = req.params.id;
        const deleteRequest = await Expences.findByIdAndDelete(_id)
        res.send(deleteRequest);
    }catch(e){
        res.send(e);
    }
})

app.listen(PORT, () => {
    console.log(`Connection is setup at ${PORT}`);
})
