import mongoose from "mongoose"

export default Movies = mongoose.model("Movies", {
    name: String,
    date: Date,
    likes: Number
})