const dotenv = require('dotenv');
const mysql = require('mysql');
const app = require('./app');

dotenv.config({ path: './config.env' });

/*
  IF ERROR:  Client does not support authentication protocol requested by server; consider 
             upgrading MySQL client, RUN QUERY code 0S<db.init.sql> on workbench 
*/
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(function (err) {
  if (err) {
    console.error('Error connecting ro the Db: ' + err.stack);
    return;
  }
  console.log('Db connected. Connected as id ' + db.threadId);
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Api running on ${process.env.PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled error occluded, shutting the server down');
  server.close(() => {
    db.end();
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('Uncaught exception has occluded, shutting the server down');
  server.close(() => {
    db.end();
    process.exit(1);
  });
});

module.exports = db;
