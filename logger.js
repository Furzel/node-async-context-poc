const util = require('util');
const { asyncContext } = require('./async-context');

module.exports.log = function (...args) {
    const uuid = asyncContext.getStore();
    if (uuid) {
        console.log(`${uuid}: ${util.format(...args)}`);
    } else {
        console.log(`no context: ${util.format(...args)}`);
    }
}