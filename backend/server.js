const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config({ path: './config.env' });
const app = require('./app');

/*
  IF ERROR:  Client does not support authentication protocol requested by server; consider 
             upgrading MySQL client, RUN QUERY code 0S<db.init.sql> on workbench 
*/
const db = mysql.createConnection({
  host: 'localhost',
  port: process.env.dbPORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'ecom'
});
db.connect(function (err) {
  if (err) {
    console.error('Error connecting ro the Db: ' + err.stack);
    return;
  }
  console.log('Db connected. Connected as id ' + db.threadId);
});

app.listen(process.env.PORT, () => {
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
