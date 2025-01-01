import express from 'express'
import cors from 'cors';
import {randId} from './utils/index';
import path from 'path'
import simpleGit from 'simple-git';
const app=express();
app.use(express.json());
app.use(cors());
app.post('/deploy',async(req,res)=>{
    const repolink=req.body.repolink;
    const id=randId();
    await simpleGit().clone(repolink,path.join(__dirname,`output/${id}`));
    res.json({
        id:id
    })


})
app.listen(3000,()=>{
    console.log('sever is running on port 3000');
})