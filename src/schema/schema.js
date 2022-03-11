const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
  }

  type Room {
    id: ID!
    rommNumber: Int!
    numOfBeds: Int!
    pricePerNight: Float!
    oceanView: Boolean!
    minibar: Boolean!
  }

  type Reservation {
    id: ID!
    user: User
    dateFrom: String!
    dateTo: String!
  }

  enum Role {
    MANAGER
    CLERK
    GUEST
  }

  type Query {
    getUsers: [User!]
    getUser: User!
    getRooms: [Room!]
    getRoom: Room!
    getReservations: [Reservation!]
    getReservation: Reservation!
  }

  type Mutation {
    createUser(
      email: String!
      firstName: String!
      lastName: String!
      role: Role
    ): User!
    createRoom(
      rommNumber: Int!
      numOfBeds: Int!
      pricePerNight: Int!
      minibar: Boolean!
      oceanView: Boolean!
    ): Room!
    createReservation(
      userId: Int!
      dateFrom: String!
      dateTo: String!
    ): Reservation!
  }
`;

module.exports = {
  typeDefs,
};
