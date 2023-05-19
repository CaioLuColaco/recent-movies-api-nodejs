import express from "express";
import cors from "cors";
import dotenv from "dotenv"

import {initMongoose} from "./src/config/database.js";
import routes from "./src/routes.js";

import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger_output.json' assert { type: "json" };

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(routes, swaggerUi.serve, swaggerUi.setup(swaggerFile))

initMongoose()

app.listen(process.env.PORT || 3003, () => console.log(`Server is Running on port: ${process.env.PORT}!`))
