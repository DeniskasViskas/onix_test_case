const express = require('express')
const todoRouter = require('./routes/todoRoute')
const cors = require('cors');


const server = express()
server.use(express.json())
server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
server.use('/todo', todoRouter)
const start = async () => {
    try {
        server.listen(3001, () => console.log(`Server started on port 3001`))
    } catch (e) {
        console.log(e)
    }
}
start()
