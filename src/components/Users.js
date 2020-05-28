import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {
    constructor(props) {
        super(props);
      }

      render () {
          const { users } = this.props;
          
          return (
            <div className='users-container'>
                {users.map(({ name, age, hobbies }) => (                
                  <div>
                    {name}
                    {age}
                    {hobbies}
                  </div>
                ))}
            </div>
          )
      }
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps)(Users);