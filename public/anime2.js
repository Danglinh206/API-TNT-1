exports.name = '/images/anime2';
exports.index = async(req, res, next) => {
    try {
        const girl = require('./data/json/anime2.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        res.jsonp({
            url: image,
            count: girl.length,
            author: 'TuanDeepTry'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}