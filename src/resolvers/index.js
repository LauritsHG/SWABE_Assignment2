const { prisma } = require("../database.js");
const { Query } = require("./query.js");
const { Mutation } = require("./mutation.js");

const resolvers = {
  Mutation,
  Query,
};

module.exports = {
  resolvers,
};
