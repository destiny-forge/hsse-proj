// baseConfig.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'development') {
    // we are in development - return dev set of keys
    // file purposefully excluded to avoid code copy
    module.exports = require('./dev')
} else if (process.env.NODE_ENV === 'production') {
    // We are in production - return the prod set of keys
    module.exports = require('./prod');

} else if( process.env.NODE_ENV === 'staging') {
    module.exports = require('./stage')
}
else {
    // We are in development - return the dev keys!!!
    console.log("Undefined environment");
}

