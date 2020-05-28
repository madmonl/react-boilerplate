const usersData = [
  {name: 'liad', age: 24, hobbies: ['chess', 'sports']}, 
  {name: 'joseph', age: 25, hobbies: ['film', 'walks']}
]

export const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    name: String!
    age: Int!
    hobbies: [String!]!
  }
`;

export const resolvers = {
  Query: {
    users: () => {
      return usersData;
    }
  }
};
