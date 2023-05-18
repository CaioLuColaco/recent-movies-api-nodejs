import express from "express";
import cors from "cors";
import dotenv from "dotenv"

import {initMongoose} from "./src/config/database.js";
import routes from "./src/routes.js";

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(routes)

initMongoose()

app.listen(process.env.PORT || 3003, () => console.log(`Server is Running on port: ${process.env.PORT}!`))
