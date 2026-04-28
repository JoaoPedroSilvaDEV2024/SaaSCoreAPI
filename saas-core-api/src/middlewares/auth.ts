import jwt from "jsonwebtoken";

export function auth(req:any,res:any,next:any){

 const token = req.headers.authorization?.split(" ")[1];

 if(!token) return res.sendStatus(401);

 try{
   req.user = jwt.verify(token,"secret");
   next();
 }catch{
   return res.sendStatus(401);
 }

}