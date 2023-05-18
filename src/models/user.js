import mongoose from "mongoose"

export const User = mongoose.model("User", {
    email: String,
    password: String,
    created_at: { type: Date, default: Date.now }
})