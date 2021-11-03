const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(function (err) {
  if (err) {
    console.error('Error connecting to the Db: ' + err.stack);
    return;
  }
  console.log('Db connected. Connected as id ' + db.threadId);
});

module.exports = db;
