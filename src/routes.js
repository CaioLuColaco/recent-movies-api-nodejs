import express from "express";
const routes = express.Router()

import {createUser, loginUser} from './controllers/UserControllers.js'

// User controllers
routes.post("/registerUser", createUser)
routes.post("/loginUser", loginUser)

export default routes;