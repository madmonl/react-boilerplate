const {  ApolloServer, gql } = require('apollo-server-express');

const usersData = [
  {name: 'liad', age: 24, hobbies: ['chess', 'sports']}, 
  {name: 'joseph', age: 25, hobbies: ['film', 'walks']}
]

const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, age: Int!, hobbies: [String!]): User!
  }

  type User {
    name: String!
    age: Int!
    hobbies: [String!]!
  }
`

const resolvers = {
  Query: {
    users: () => {
      return usersData;
    }
  },
  Mutation: {
    createUser: (_, { name, age, hobbies }) => {
      const newUser = { name, age, hobbies };
      usersData.push(newUser);
      return newUser
    }
  }    
};

module.exports = new ApolloServer({ typeDefs, resolvers });
