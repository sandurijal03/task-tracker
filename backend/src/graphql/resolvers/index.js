const postResolvers = require('./post');
const userResolvers = require('./auth');

module.exports = [postResolvers, userResolvers];
