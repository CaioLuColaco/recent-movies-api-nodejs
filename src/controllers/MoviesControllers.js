import { Movies } from "../models/movies.js";
import axios from "axios"

export async function getBrazilianMovies(req, res) {
    try {
        const movies = await axios.get("https://imdb-api.com/pt-BR/API/AdvancedSearch/k_rvqtrr6w?title_type=tv_movie&countries=br&sort=release_date,desc")

        const topTen = movies.data.results.slice(2, 12)

        res.status(200).json(topTen)

    } catch (error) {
        return res.status(400).json({status: 400, message: error.message})
    }
}

export async function likeMovie(req, res){
    try {
        const title = req.params.title
        
        const findMovie = await Movies.findOne({title: title})

        if(findMovie){
            const result = await Movies.updateOne({title: findMovie.title, likes: findMovie.likes + 1})

            return res.status(200).json({status: 200, message: "Curtiu com sucesso!"})
        }else{
            const result = await Movies.create({title: title, likes: 1})

            return res.status(200).json(result)
        }

    } catch (error) {
        return res.status(400).json({status: 400, message: error.message})
    }
}

export async function getOneMovie(req, res){
    try {
        const title = req.params.title

        const result = await Movies.findOne({title: title})

        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message})
    }
}

export async function getAllLikedMovies(req, res){
    try {
        const result = await Movies.find({})

        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message})
    }
}