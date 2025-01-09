import { createClient,commandOptions } from "redis";
import { copyFinalDist, downloadS3Folder } from "./download";
import { buildProject } from "./utils";
const subscriber=createClient();
subscriber.connect();
const publisher=createClient();
publisher.connect();
const main=async()=>{
    while(true){
        const res=await subscriber.brPop(// brPop reddis se aataa hai 
            commandOptions({isolated:true}),
            'build-queue',//queue ka naam
            0
        );
        // console.log(res);
        console.log("hellou")
        // @ts-ignore;
         const id=res.element;
         console.log("id ",id);
         await downloadS3Folder(`output/${id}`)
         console.log("Downloaded")
        await buildProject(id);
        copyFinalDist(id);
        publisher.hSet("status", id, "deployed")
    }
}
main();

//redis localhost port 6379


