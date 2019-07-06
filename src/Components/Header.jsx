import React from "react";

import { NavLink } from "react-router-dom";
import logo from "../Images/logo_wee.svg";
import styled from "styled-components";

const Bound = styled.div`
  height: 80px;

  .logo {
    width:60px;
    height: 60px;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Bound>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <NavLink className="div_logo" to="/">
            <img className='logo' src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/dangnhap">
                  Link
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/thongtintaikhoan">
                  Link
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Link
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Bound>
    );
  }
}
