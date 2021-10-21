const express = require("express");
const dotnenv = require("dotenv");

//intitialized express app
const app = express();

//configuring the dotenv module so that we can use the defined environment variables
dotnenv.config();

app.listen(process.env.PORT, () => {
  console.log("Server listening on port: ", process.env.PORT);
});
