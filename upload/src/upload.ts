
import { S3 } from "aws-sdk";
import fs from "fs";

const s3=new S3({
    accessKeyId: "",
    secretAccessKey: "",
    region: '',
})

export const upload = async (fileName: any, localFilePath: any) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "",
        Key: fileName,
    }).promise();
    console.log(response);
}
