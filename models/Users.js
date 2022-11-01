// Import Mongoose
const mongoose = require("mongoose");

// Create the Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

// Create the model
const UserModel = mongoose.model("users", UserSchema) // Collection "users" will use schema "UserSchema"
module.exports = UserModel; // allows access outside of this file