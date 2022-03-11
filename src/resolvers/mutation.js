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
  createRoom: (parent, args) => {
    return prisma.room.create({
      data: {
        rommNumber: args.rommNumber,
        numOfBeds: args.numOfBeds,
        pricePerNight: args.pricePerNight,
        minibar: args.minibar,
        oceanView: args.oceanView,
      },
    });
  },
  createReservation: (parent, args) => {
    return prisma.reservation.create({
      data: {
        userId: args.userId,
        dateTo: args.dateTo,
        dateFrom: args.dateFrom,
      },
    });
  },
};

module.exports = {
  Mutation,
};
