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
