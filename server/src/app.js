const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require("./config/dbConnect");
const { registerUser } = require('./controllers/users/usersCtrl');
const userRoute = require('./routes/users/userRoute');
const { errorHandler, notFound } = require('./middlewares/errorMiddlewares');
const app = express();




//env

dotenv.config();

//dbconnect
dbConnect();

//middlewares
app.use(express.json());

//routes
app.use("/api/users", userRoute);

//error
app.use(notFound);
app.use(errorHandler);


module.exports =app;