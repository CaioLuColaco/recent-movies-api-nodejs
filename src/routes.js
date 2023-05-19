import express from "express";
const routes = express.Router()

import {createUser, loginUser} from './controllers/UserControllers.js'
import { getBrazilianMovies, likeMovie, getOneMovie, getAllLikedMovies } from "./controllers/MoviesControllers.js"

import { checkUserToken } from "./middlewares/checkToken.js";

// User Routes
routes.post("/registerUser", createUser)
routes.post("/loginUser", loginUser)

// Movies Routes
routes.get("/tenMovies", getBrazilianMovies)
routes.get("/movie/:title", checkUserToken, getOneMovie)
routes.get("/movies", checkUserToken, getAllLikedMovies)
routes.put("/likeMovie/:title", checkUserToken,likeMovie)

export default routes;