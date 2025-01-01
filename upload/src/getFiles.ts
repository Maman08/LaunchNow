import path from 'path'
import fs from 'fs';

export const getFiles=(folder: any)=>{
      let files: any[]=[];
      const arr=fs.readdirSync(folder);
    //   console.log(arr);
      arr.forEach(file=>{
        const completePath=path.join(folder,file)
        if(fs.statSync(completePath).isDirectory()){
            files=files.concat(getFiles(completePath));
        }else{
            files.push(completePath)
        }
      })
      return files
}