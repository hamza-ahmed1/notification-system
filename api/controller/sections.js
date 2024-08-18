import { db } from "../db.js";

export const  get_programs=async(req,res)=>{
  const q="select * from tbl_programs";
  db.query(q,(err,data)=>{
    if(err) throw err;
    console.log(data);
    res.status(200).json(data);
  })
}