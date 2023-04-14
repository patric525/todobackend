const express = require('express')
const router= express.Router()
const todop = require('../models/todoschema')


router.post('/addtodo' , async(req,res)=>{
    try {
        const{email,todo,check}=req.body
        const d = new Date()
        const date = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        const newtodo = new todop({email:email,todo:todo,check:check,date:date,month:month,year:year})
        const savetodo =await newtodo.save()
        if(savetodo){
            return res.json({message:'todo added'})
        }
    } catch (error) {
        console.log(error);
    }
})

//get todos
router.post('/gettodo' , async(req,res)=>{
    try {
        const{email}=req.body
        const findtodo = await todop.find({email:email})
        if(findtodo){
            return res.json(findtodo)
        }
    } catch (error) {
        console.log(error);
    }
})
//delete todo
router.post('/delete' , async(req,res)=>{
    try {
        const{id}=req.body
        const finddelete = await todop.findByIdAndDelete({_id:id})
        if(finddelete){
            return res.json({message:'todo deleted'})
        }
    } catch (error) {
        console.log(error);
    }
})
//updata todo
router.patch('/update/:id' ,async(req,res)=>{
    try {
        const _id = req.params.id
        if(req.body.check===false){
            req.body.check=true
        }
        else{
            req.body.check=false
        }
        const updatafind = await todop.findByIdAndUpdate({_id:_id} , req.body)
        console.log(updatafind);
        if(updatafind){
            return res.json({message:'todo updated'})
        }
    } catch (error) {
        console.log(error);
    }
})
router.patch('/updatetodo/:id' , async(req,res)=>{
    try {
        const id = req.params.id
        const updatatodo = await todop.findByIdAndUpdate({_id:id} , req.body)
        if(updatatodo){
            return res.json({message:"todo updated"})
        }
    } catch (error) {
        console.log(error);
    }
})
module.exports=router