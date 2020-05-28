export default (users = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
          return [
            ...users,
            action.user
          ];
        case 'SET_USERS':
            return action.users;
        default:
          return users;
    }
}
