
import { S3 } from "aws-sdk";
import fs from "fs";

const s3=new S3({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETKEY,
    region: process.env.REGION,
})

export const upload = async (fileName: any, localFilePath: any) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: process.env.BUCKET_NAME,
        Key: fileName,
    }).promise();
    console.log(response);
}