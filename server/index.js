require("dotenv").config();
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

const cors = require("cors");
const port = process.env.PORT || 8008;
const pool = require('./db');


app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
pool.connect();


app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my now server on port" + port);
});


const getDataTest = require('./app/getDataTest');
const getUserByEmail = require("./app/getUserByEmail");


app.get('/test', getDataTest);
app.get("/todo/:userEmail", getUserByEmail);
