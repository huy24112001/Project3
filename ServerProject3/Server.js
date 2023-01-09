const express = require('express')
var cors = require('cors')
const server = express().use(express.json()).use(express.urlencoded({extended: true})).use(cors());
const mongoose =  require('mongoose');


const userRouter = require('./app/router/userRouter');

server.use('/users', userRouter);



// Connect to the db
mongoose.connect("mongodb://127.0.0.1:27017/Project3", {} )
    .then(results => console.log("Connect to database "))
    .catch(err => console.log(err))




const port = 2411
server.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
})
