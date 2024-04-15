const express = require("express");

const userRouter = require('./routes/user');
const { connectToMongoDB } = require('./connection')
const { logReqRes } = require('./middlewares/index')
 

const app = express();
const PORT = 8000;

// mongoose connection
connectToMongoDB("mongodb://127.0.0.1:27017/learn-nodejs-expresjs")
    .then(()=>{ console.log("Server connected to MongoDB") })
    .catch((err)=> { console.log("Error in connecting server to MongoDB") })

    
// middleware -plugin
app.use(express.urlencoded({extended: false}))
app.use(logReqRes('log.txt'));


// Routes 
app.use('/api/users', userRouter);


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})