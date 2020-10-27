const { AsyncLocalStorage } = require('async_hooks');
const { v4: uuidv4 } = require('uuid');

const asyncLocalStorage = new AsyncLocalStorage();

module.exports.asyncContext = asyncLocalStorage;

module.exports.middleware = function (req, res, next) {
    asyncLocalStorage.run(uuidv4(), () => {
        next();
    });
}