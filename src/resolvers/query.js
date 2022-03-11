const { prisma } = require("../database.js");

const Query = {
  getUsers: (parent, args) => {
    return prisma.user.findMany({});
  },
};

module.exports = {
  Query,
};
