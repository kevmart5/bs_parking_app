import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

export default class MenuDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };

    this.logout = this.logout.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  logout = () => {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('user');
    this.setState({redirect: true});
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="nav-link" caret>
          Menu
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to={'/home'} className="dropDown__list-element">Parking Spaces</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to={'/home'} className="dropDown__list-element">Reserve</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to={'/profile'} className="dropDown__list-element">Profile</Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to={''} onClick={this.logout} className="dropDown__list-element">Log out</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}


