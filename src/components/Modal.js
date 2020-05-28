import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { startAddUser } from '../actions/users'
import { connect } from 'react-redux';

export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          name: null,
          age: null,
          hobbies: null
        };

        this.toggleExamState = this.toggleExamState.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
    toggleExamState() {
        this.setState(({ open }) => ({ open: !open }));
    }

    handleChange(event, key) {
        this.setState({
            [key]: event.target.value,
          });
    }

    handleAddUser() {
        const user = {
            name: this.state.name,
            age: parseInt(this.state.age),
            hobbies: this.state.hobbies.split(' ')
        }

        this.props.startAddUser(user);
        this.setState(({ open }) => ({ open: !open }));
    }

    render() {
        const actions = [
            <FlatButton
                label="Add"
                primary={false}
                keyboardFocused={false}
                onClick={this.handleAddUser}
            />
        ];
  
        const { name, age, hobbies } = this.state;

        return (
            <div>
                <FloatingActionButton onClick={this.toggleExamState} className="button--floating">
                  <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Add user"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.toggleExamState}                    
                >
                <TextField
                    onChange={(event) => this.handleChange(event, 'name')}
                    value={name}
                    floatingLabelText="Insert your name"
                /><br />
                <TextField
                    onChange={(event) => this.handleChange(event, 'hobbies')}
                    value={hobbies}
                    floatingLabelText="Space separated hobbies"
                /><br />
                <TextField
                    onChange={(event) => this.handleChange(event, 'age')}
                    value={age}
                    floatingLabelText="Insert your age"
                /><br />
                </Dialog>
            </div>
      );
    }
  }

const mapDispatchToProps = (dispatch) => ({
    startAddUser: (user) => dispatch(startAddUser(user))
})

export default connect(undefined, mapDispatchToProps)(Modal);
