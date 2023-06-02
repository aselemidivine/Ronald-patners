const express = require("express");
const mongoose = require('mongoose');
const formRouter = require('./route/index')
require('dotenv/config');

const app = express();
// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://Ronald-Partners:ronald-partners@cluster0.gwdmzoy.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("Mongodb connection failed"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', formRouter);

module.exports = app;
