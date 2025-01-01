import express from 'express'
import cors from 'cors';
import {randId} from './utils/index';
import path from 'path'
import simpleGit from 'simple-git';
import {getFiles} from './getFiles'
import {upload} from './upload'
const app=express();
app.use(express.json());
app.use(cors());

app.post('/upload',async(req,res)=>{
    const repolink=req.body.repolink;
    const id=randId();
    await simpleGit().clone(repolink,path.join(__dirname,`output/${id}`));
    const files=getFiles(path.join(__dirname, `output/${id}`))
    // console.log(files);
    // res.json({
    //     id:id,
    //     files
    // })
    const exactFiles: any[]=[];
    files.forEach(file=>{
        exactFiles.push(file.slice(__dirname.length+1));
    })
    // console.log(exactFiles);
   
    files.forEach(async file => {
        await upload(file.slice(__dirname.length + 1), file);
    })

})
app.listen(3000,()=>{
    console.log('sever is running on port 3000');
})