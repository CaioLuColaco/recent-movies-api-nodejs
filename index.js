import express from "express";
import cors from "cors";
import dotenv from "dotenv"

import {initMongoose} from "./src/config/database.js";

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

initMongoose()

app.listen(process.env.PORT || 3003, () => console.log(`Server is Running on port: ${process.env.PORT}!`))
