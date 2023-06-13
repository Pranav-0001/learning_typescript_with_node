import { log } from 'console'
import express from 'express'
import routers from './Routers/reminder'
const app=express()


app.use(express.json())
app.use('/',routers)


app.listen(4000,()=>{
    console.log("connencted port 4000");
    
})

