import express from 'express'
const app=express();
app.get('/*',(req,res)=>{
    const host=req.hostname//retrieves d host name from url,not the port name 
    const id=host.split(".")[0];
    console.log(id);
})
app.listen(3001,()=>{
    console.log('Sever is running on port 3001')
})