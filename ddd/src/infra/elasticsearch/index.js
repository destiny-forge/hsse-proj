const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: process.env.elasticsearch.nodes });
module.exports = client;
