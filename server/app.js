const express = require("express");
const mongoose = require('mongoose');
const formRouter = require('./route/index')
const bodyParser = require('body-parser');

//require('dotenv/config');
const cors = require('cors');

const app = express();
app.use(cors());
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL_LOCAL,
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
// Add this before your route handlers
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;
