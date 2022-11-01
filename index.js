const express = require("express")
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require('cors');

app.use(express.json());
app.use(cors());



// mongoose.connect('mongodb+srv://guisiebert:fiorina123@cluster0.fh7je7h.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://guisiebert:fiorina123@cluster0.fh7je7h.mongodb.net/merntutorial?retryWrites=true&w=majority')

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err,result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console.log("boa piazão")
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log("SERVER RUNS");
});

