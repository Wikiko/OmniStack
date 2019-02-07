const Tweet = require('../models/Tweet');

async function index(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt');

    return res.json(tweets);
}

async function store(req, res) {
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);
    
    return res.json(tweet);
}

module.exports = {
    index,
    store
}