const knex = require('knex');

const db = process.env.KNEXCHOICE || 'development';
const config = require('../knexfile.js')[db];

module.exports = knex(config);
