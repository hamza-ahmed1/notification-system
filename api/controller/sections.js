import { db } from "../db.js";

export const get_programs = async (req, res) => {
  const q = "SELECT * FROM tbl_programs";
  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database query error' });
    }
    console.log(data);
    res.status(200).json(data);
  });
};

export const get_dec = async (req, res) => {
  const q = "SELECT * FROM tbl_dec";
  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database query error' });
    }
    console.log(data);
    res.status(200).json(data);
  });
};