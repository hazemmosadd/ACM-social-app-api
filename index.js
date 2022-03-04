const express = require("express");
require("./db/mongoose");
const mongoose = require("mongoose");
const userRoute = require('./routes/userRoute.js');
const todoRoute = require('./routes/todoRoute.js');

//import Memebers from './data.json'

const app = express();

//mongoose.connect(`${process.env.MONGODB_URI}`,()=> console.log('Connected to DB'))

app.use(express.json());

app.use('/api/user',userRoute);
app.use('/api/posts',todoRoute);


app.listen(3000, () => console.log("Listening to port 3000"));
