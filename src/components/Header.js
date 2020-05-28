import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { startLogout } = this.props;

    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/dashboard" />
            <Modal />
            <button className="button button--link" onClick={startLogout}>Logout</button>
          </div>
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
