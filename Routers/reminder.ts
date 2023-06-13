import { log } from "console";
import { Router } from "express";
import createReminder from "../Dtos/create";
const router=Router()


router.get('/',(req,res)=>{
    res.send("Home ROute")
})




router.post('/',(req,res)=>{
    console.log(req.body);
    
   const {title}=req.body as createReminder
   console.log(title);
   res.json("success")
   
})

export default router