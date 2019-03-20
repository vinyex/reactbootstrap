import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import './Homepage.css';

export default class Homepage extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron className="text-center">
            <Image src="assets/choose.svg" circle width="250" height="100" />
            <h2>Hi just trying some reactbootstrap!</h2>
            <p>Geting used to it xx</p>
            <Link to="/profile">
                <Button bsStyle="primary">Profile</Button>
            </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/uploading.svg" circle className="profile-pic" />
                <h3>This React are just satisfying.</h3>
                <p>Maybe I should doing more exercises.</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/coding-pic.svg" circle className="profile-pic" />
                <h3>Just me doing my job. Nevermind.</h3>
                <p>Its 10 PM and I'm about to go sleep.</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/coding-2.svg" circle className="profile-pic" />
                <h3>Still the prototype.</h3>
                <p>Not full project.</p>
            </Col>
        </Row>
      </Grid>
    )
  }
}
