import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarCustom.css";

export default class NavbarCustom extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Vinyex.</Link>
            </Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                    Homepage
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href="/contact" to="/contact">
                    Contact
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/profile" to="/profile">
                    Profile
                </NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
