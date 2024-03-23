const express = require('express')
const dbConnect = require("./config/dbConnect");
const { registerUser } = require('./controllers/users/usersCtrl');
const userRoute = require('./routes/users/userRoute');
const { errorHandler, notFound } = require('./middlewares/errorMiddlewares');
const app = express();

dbConnect();

app.use(express.json());

app.use("/", userRoute);

app.use(notFound);
app.use(errorHandler);


module.exports =app;