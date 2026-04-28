import { Pool } from "pg";

export const db = new Pool({
 user:"postgres",
 password:"2445",
 host:"localhost",
 port:5432,
 database:"saascore"
});