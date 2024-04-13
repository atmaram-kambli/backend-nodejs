const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = 8000;

// middleware
app.use(express.urlencoded({extended: false}))


// mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/learn-nodejs-expresjs")
 .then(() => {
    console.log("The app is connected to mongoose database!");
 })
 .catch((err) => {
    console.log("Error is mongoDB connection: ",err);
 })

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
    },
    jobTitle: {
        type: String,
    },
})


// model
const User = mongoose.model('user', userSchema);




app.get('/', (req, res) => {
    res.send(`<h1>Hello World!!</h1>`)
})


app.get('/users', async (req, res) => {
    const allUsers = await User.find({});
    // console.log(allUsers)
    res.send(`
        <h1>All Users</h1>
        <ul>
            ${allUsers && allUsers.map((user) => {
                return (
                    `<li>${user.firstName}</li>`
                )
            }).join("")}
        </ul>
    `)
})



app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    console.log(user)
    // console.log(allUsers)
    res.send(`
        <h1>Hello ${user.firstName}</h1>
        <p>Your age is ${user.age} and email id is ${user.email}</p>
        
    `)
})

app.post('/api/users', async(req, res) => {
    const body = req.body;
    // console.log(body)
    if(!body.firstName || !body.email) {
        return res.status(400).json({msg: "Invalid User Data"});
    }
    const newUser = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        age: body.age,
        jobTitle: body.jobTitle,
    })
    console.log(newUser)
    return res.status(201).json({msg: "New user is succesfully created!!"});
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})