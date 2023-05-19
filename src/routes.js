import express from "express";
const routes = express.Router()

import {createUser, loginUser} from './controllers/UserControllers.js'
import { getBrazilianMovies, likeMovie, getOneMovie, getAllLikedMovies } from "./controllers/MoviesControllers.js"

// User Routes
routes.post("/registerUser", createUser)
routes.post("/loginUser", loginUser)

// Movies Routes
routes.get("/tenMovies", getBrazilianMovies)
routes.get("/movie/:title", getOneMovie)
routes.get("/movies", getAllLikedMovies)
routes.put("/likeMovie/:title", likeMovie)

export default routes;