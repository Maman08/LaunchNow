import { exec, spawn } from "child_process";
import path from "path";

export function buildProject(id: any) {
    return new Promise((resolve) => {
        console.log("CURRENT DIR ",__dirname);
        const child = exec(`cd ${path.join(__dirname, `output/${id}`)} && npm install && npm run build`)

        child.stdout?.on('data', function(data) {
            console.log('stdout: ' + data);
        });
        child.stderr?.on('data', function(data) {
            console.log('stderr: ' + data);
        });

        child.on('close', function(code) {
           resolve("")
        });

    })

}