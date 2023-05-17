import express from "express";
import cors from "cors";
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 3003, () => console.log(`Server is Running on port: ${process.env.PORT}!`))
