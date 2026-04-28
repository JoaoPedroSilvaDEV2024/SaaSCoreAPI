import { Router } from "express";
import { db } from "../config/db";
import { auth } from "../middlewares/auth";
import { role } from "../middlewares/role";
import bcrypt from "bcrypt";

const router = Router();

router.get("/", auth, role("admin","manager"), async (req:any,res)=>{

 const users = await db.query(
   "SELECT id,name,email,role FROM users WHERE company_id=$1",
   [req.user.company]
 );

 res.json(users.rows);
});

router.post("/", auth, role("admin"), async (req:any,res)=>{

 const { name,email,password,role:userRole } = req.body;

 const hash = await bcrypt.hash(password,10);

 const user = await db.query(
 `INSERT INTO users(name,email,password,role,company_id)
 VALUES($1,$2,$3,$4,$5)
 RETURNING id,name,email,role`,
 [
   name,
   email,
   hash,
   userRole,
   req.user.company
 ]
 );

 res.json(user.rows[0]);
});

router.put("/:id", auth, role("admin"), async (req,res)=>{

 const { name,role:userRole } = req.body;

 await db.query(
 "UPDATE users SET name=$1, role=$2 WHERE id=$3",
 [name,userRole,req.params.id]
 );

 res.json({message:"Atualizado"});
});

router.delete("/:id", auth, role("admin"), async (req,res)=>{

 await db.query(
 "DELETE FROM users WHERE id=$1",
 [req.params.id]
 );

 res.json({message:"Deletado"});
});

export default router;