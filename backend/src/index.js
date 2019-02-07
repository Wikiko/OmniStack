const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect('mongodb://goweek:goweek123@ds223685.mlab.com:23685/omni-stack-go-week',
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json())
app.use(routes);

server.listen(3000, () => {
    console.log(':) Server installed on port 3000');
});