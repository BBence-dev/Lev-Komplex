const express = require('express');
const userRouter = require('./routes/user.Routes');
const productRouter = require('./routes/product.Routes');
const adminRouter = require('./routes/admin.Routes');
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/admins', adminRouter);


module.exports = app;
