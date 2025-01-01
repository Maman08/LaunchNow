export const  randId=()=>{
    const domain="123456789qwertyuiopasdfghjklzxcvbnm";
    const len=5;
    let id="";
    for(let i =0;i<len;i++){
        id+=domain[Math.floor(Math.random()*domain.length)]
    }
    return id;
}