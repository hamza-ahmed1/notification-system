import mysql from 'mysql'

export const  db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"daniyal",
    database:"db_notification"
})

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');
  });