const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

var schema = buildSchema(`
  type Query {
    users: String
  }
`);

const users = {
  users: () => {
    return 'Hello world!';
  }
};

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use('/users', graphqlHTTP({
  schema: schema,
  rootValue: users,
  graphiql: true,
}));

app.listen(port, () => {
  console.log('Server is up!');
});
