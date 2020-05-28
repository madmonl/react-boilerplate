import { client } from './../app.js'
import { gql } from 'apollo-boost';

export const fetchUsers = () => {
  return (dispatch) => {
    const usersQuery = gql`
      query {
        users {
          name
          age
          hobbies
        }
      }
    ` 
    client.query({
      query: usersQuery
    }).then((res) => dispatch(setUsers(res.data.users)));
  }
}

const setUsers = (users) => ({
    type: 'SET_USERS',
    users
})

export const startAddUser = ({ name, age, hobbies }) => {
  return (dispatch) => {
    const userMutation = gql`
      mutation createUser ($name: String!, $age: Int!, $hobbies: [String!]!){
        createUser(name: $name, age: $age, hobbies: $hobbies) {
          name
          age
          hobbies
        }
      }
    ` 
    client.mutate({
      mutation: userMutation,
      variables: { name, age, hobbies }
    }).then((res) => (dispatch(addUser({
        name: res.data.createUser.name, 
        age: res.data.createUser.age, 
        hobbies: res.data.createUser.hobbies
    }))))
  }
}

const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
}
