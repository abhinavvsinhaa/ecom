const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const productRouter = require('./Routes/productRouter');
const userRouter = require('./Routes/userRouter');

const app = express();

const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(cookieParser());

if (process.env.MODE == 'DEV') {
  app.use(morgan('dev'));
}

app.use(express.json());

//Routers below
app.use('/api/v1/user', userRouter);
app.use('/api/v1/products', productRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: false,
    message: 'This route does not exists!'
  });
});

module.exports = app;
