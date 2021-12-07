const app = require('./app');

const server = app.listen(process.env.PORT, () => {
  console.log(`Api running on ${process.env.PORT}`);
});

/* 
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
 */
