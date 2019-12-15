import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../app/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        let stateButton;
        if (this.props.currentUser === null) {
            stateButton = <Link to="/login" className="nav-link">Log in</Link>
        } else {
            stateButton = (
              <Link
                to="/"
                className="nav-link"
                onClick={() => this.props.logout()}
              >
                Log out
              </Link>
            );
        }

        let notLogged;

        if (this.props.currentUser === null) {
          notLogged = '/login'
        } else {
          notLogged = '/projects/new'
        }

        return (
          <div className="navbar">
            <div className="left-bar">
              <p className="nav-link">Explore</p>
              <Link to={notLogged} className="nav-link">Start a project</Link>
            </div>
            <div className="logo-bar">
              <Link to="/" className="nav-link">
                <img className="logo-img" src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="right-bar">
              <div className="nav-link">
                <Link to="/search" className="link">
                  Search{" "}
                  <FontAwesomeIcon className="search-icon" icon={faSearch} />
                </Link>
              </div>
              {stateButton}
            </div>
          </div>
        );
    }
}

export default Navbar;