const auth = require('./authentication');

logger = (req, res, next) => {
    console.log('Logging..');
    next(auth(req, res, next));
};

module.exports = logger;