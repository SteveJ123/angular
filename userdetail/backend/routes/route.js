const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");
const objectId = require("mongoose").Types.ObjectId;

//get, post, put, delete
//base path http://localhost:4200/employee

// get api
router.get("/",(req,res)=>{
    Employee.find((err, doc)=>{
        if(err){
            console.log("error in get data", err);
        }else{
            res.send(doc);
        }
    })
})

// post api
router.post("/", (req, res)=>{
    let employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    })

    employee.save((err, doc)=>{
        if(err){
            console.log("error in post data", err);
        }else{
            res.send(doc);
        }
    })
})

// get single employee api
router.get("/:id",(req,res)=>{
    if(objectId.isValid(req.params.id)){
        Employee.findById(req.params.id, (err, doc)=>{
            if(err){
                console.log("error in get data", err);
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send("no recound found with id", req.params.id);
    }

    Employee.find((err, doc)=>{
        if(err){
            console.log("error in get data", err);
        }else{
            res.send(doc);
        }
    })
})

// put api
router.put("/:id",(req,res)=>{
    if(objectId.isValid(req.params.id)){

        let emp ={
            name: req.body.name,
            position: req.body.position,
            dept: req.body.dept
        }
        Employee.findByIdAndUpdate(req.params.id, {$set :emp}, {new:true} , (err, doc)=>{
            if(err){
                console.log("error in update", err);
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send("no recound found with id", req.params.id);
    }

    Employee.find((err, doc)=>{
        if(err){
            console.log("error in get data", err);
        }else{
            res.send(doc);
        }
    })
})

//delete employee id
router.delete("/:id",(req,res)=>{
    if(objectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id, (err, doc)=>{
            if(err){
                console.log("error in delete", err);
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send("no recound found with id", req.params.id);
    }

    Employee.find((err, doc)=>{
        if(err){
            console.log("error in get data", err);
        }else{
            res.send(doc);
        }
    })
})

module.exports = router;