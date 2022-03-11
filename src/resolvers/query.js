const { prisma } = require("../database.js");

const Query = {
  getUsers: (parent, args) => {
    return prisma.user.findMany({});
  },
  getUser: (parent, args) => {
    return prisma.user.findFirst({
      where: { id: Number(args.id) },
    });
  },
  getRooms: (parent, args) => {
    return prisma.room.findMany({});
  },
  getRoom: (parent, args) => {
    return prisma.room.findFirst({
      where: { id: Number(args.id) },
    });
  },
  getReservations: (parent, args) => {
    return prisma.reservations.findMany({});
  },
  getReservation: (parent, args) => {
    return prisma.reservation.findFirst({
      where: { id: Number(args.id) },
    });
  },
};

module.exports = {
  Query,
};
