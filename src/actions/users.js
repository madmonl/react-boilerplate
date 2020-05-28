import ApolloClient from 'apollo-boost';
import { client } from './../app.js'

export const fetchUsers = () => {
    return (dispatch) => {
    //     const usersQuery = gql`
    //           query {
    //             users {
    //               name
    //               age
    //               hobbies
    //             }
    //           }
    //         ` 
    //         client.query({
    //           query: usersQuery
    //         }).then((res) => setUsers(res.data.users))  
    // }
    dispatch(setUsers([{name: 'liad', age: 24, hobbies: ['chess', 'sports']}, {name: 'joseph', age: 25, hobbies: ['film', 'walks']}]));
    }
}

const setUsers = (users) => ({
    type: 'SET_USERS',
    users
})
