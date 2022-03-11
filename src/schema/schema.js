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
    dataTo: String!
  }

  enum Role {
    MANAGER
    CLERK
    GUEST
  }

  type Query {
    getUsers: [User!]
  }

  type Mutation {
    createUser(
      email: String!
      firstName: String!
      lastName: String!
      role: Role
    ): User!
  }
`;

module.exports = {
  typeDefs,
};
