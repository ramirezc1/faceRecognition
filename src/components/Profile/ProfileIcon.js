import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import logo from "./logo.svg";
class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          drop="right"
        >
          <DropdownToggle
            tag="span"
            onClick={this.toggle}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img src={logo} className="br-100 h4 w4 dib" alt="avatar" />
          </DropdownToggle>
          {/* Old <DropdownMenu className='b--transparent shadow-5' style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}} right> */}
          <DropdownMenu
            className="b--transparent shadow-5"
            style={{
              marginLeft: "-6rem",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "10px",
              fontSize: "22px",
              fontColor: "black",
            }}
          >
            <DropdownItem onClick={() => this.props.toggleModal()}>
              View Profile
            </DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange("signout")}>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
