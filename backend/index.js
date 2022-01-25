const express = require("express");
// import express from "express";
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// const {MongoClient} = require("mongodb");

process.on("uncaughtException", (err) => {
  console.log("process err", err);
  process.exit(1)
})

async function run() {
  let db;
  try {
    // connection url will throw because password isn't provided
    db = await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("Connected to MongoDB");
        app.listen(8080,()=>{
            console.log('Server Started')
        })
      }
    );
  } catch (err) {
    console.log('Exiting from thrown error', err);
    process.exit(1);
  }
}
run();



//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);

// app.listen(8080,()=>{
//     console.log('Server Started')
// })