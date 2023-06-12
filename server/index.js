import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connection from "./database/connection.js";
import router from "./routes/routes.js";
import bodyParser from "body-parser";

// App

const app = express();

dotenv.config();

// app config

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//app routes

app.use("/", router);

const PORT = 8000;
const URL = process.env.MONGO_URL;

connection(URL);
app.listen(PORT, () =>
  console.log(`Server successfully started on PORT :  ${PORT}`)
);
