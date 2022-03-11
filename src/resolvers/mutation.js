const { prisma } = require("../database.js");

const Mutation = {
  createUser: (parent, args) => {
    return prisma.user.create({
      data: {
        email: args.email,
        firstName: args.firstName,
        lastName: args.lastName,
        role: args.role,
      },
    });
  },
};

module.exports = {
  Mutation,
};
