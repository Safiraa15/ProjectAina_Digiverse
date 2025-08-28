const mysql = require("mysql2");
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "Safira2004",
  database: process.env.DB_NAME || "digiverse"
});
db.connect((err)=>{
  if(err){ console.error("❌ MySQL error:", err.message); process.exit(1); }
  console.log("✅ MySQL Connected");
});
module.exports = db;
