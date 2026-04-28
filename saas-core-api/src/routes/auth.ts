import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../config/db";

const router = Router();

router.post("/register", async (req,res)=>{

 const {name,email,password} = req.body;

 const hash = await bcrypt.hash(password,10);

 const user = await db.query(
 `INSERT INTO users(name,email,password,role,company_id)
 VALUES($1,$2,$3,'admin',1)
 RETURNING id,email`,
 [name,email,hash]
 );

 res.json(user.rows[0]);
});

router.post("/login", async (req,res)=>{

 const {email,password} = req.body;

 const user = await db.query(
 "SELECT * FROM users WHERE email=$1",
 [email]
 );

 if(!user.rows.length) return res.status(401).json();

 const valid = await bcrypt.compare(
   password,
   user.rows[0].password
 );

 if(!valid) return res.status(401).json();

 const token = jwt.sign(
   {
    id:user.rows[0].id,
    role:user.rows[0].role,
    company:user.rows[0].company_id
   },
   "secret",
   {expiresIn:"1d"}
 );

 res.json({token});
});

export default router;