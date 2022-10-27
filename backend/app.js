const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
// require database connection
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");

// execute database connection
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../index.html'));
});

// register endpoint
app.post("/register", (request, response) => {
  console.log(request);
    
      // create a new user instance and collect the data
      if(request.body){
      const user = new User({
        name: request.body.name,
        email: request.body.email,
        mobileNumber: request.body.mobileNumber
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Submitted Successfully",
            
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          console.log(error);
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
      }
});

module.exports = app;
