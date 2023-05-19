import mongoose from "mongoose"

export const Movies = mongoose.model("Movies", {
    title: String,
    likes: Number,
    created_at: { type: Date, default: Date.now }
})