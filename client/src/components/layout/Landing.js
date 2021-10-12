import React, { Component } from "react";
import { Col, Row} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./Landing.css"

class Landing extends Component {
  render() {
    return (
      <div >
        <div className ="mainDiv" >
          <div >
            <h4 id ="ulText">
              Welcome to the{" "}
              <span style={{ fontFamily: "roboto" }}>Convergenx</span> Portal
            </h4>
            <br />
            <Row id = "buttonRow">
            {/* <Col>
              <Link
                to="/register"
                id="reg"
              >
                Register
              </Link>
            </Col> */}
            <Col></Col>
            <Col xs={6}>
            <div id ="logDiv">
            <Link
                to="/login"
                id="log"
              >
                Log In
              </Link>
            </div>
            </Col>
            <Col></Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
