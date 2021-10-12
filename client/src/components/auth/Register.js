import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Button, Form, Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import API from "../../utils/API"
import "./Login.css"

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      clicked: false,
      checked: false,
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      userType: this.state.userType
    };
    this.props.registerUser(newUser, this.props.history)

    // console.log(this.state.errors)
    //   document.getElementById('regDiv').style.display ="none"

    // document.getElementById('savedDiv').style.display ="inline"
    this.setState({ "clicked": true })

  };

  onOk = e => {
    e.preventDefault();

    API.regUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      userType: this.state.userType,
      userid: this.props.auth.user.id,
    })
    window.location.reload();
  }
  render() {
    const { errors } = this.state;
    console.log(this.state.errors.email)
    if(this.state.clicked == true ){
      if(this.state.errors.email == undefined)
      {console.log("yep")
      document.getElementById('regDiv').style.display = "none"

      document.getElementById('savedDiv').style.display ="inline"}
      if(this.state.errors.password == undefined)
      {console.log("yep1")
      document.getElementById('regDiv').style.display = "none"

      document.getElementById('savedDiv').style.display ="inline"}
      else{
        document.getElementById('regDiv').style.display = "inline"

      document.getElementById('savedDiv').style.display ="none"
      }
      if(this.state.errors.password2 == undefined)
      {console.log("yep2")
      document.getElementById('regDiv').style.display = "none"

      document.getElementById('savedDiv').style.display ="inline"}
      else{
        document.getElementById('regDiv').style.display = "inline"

      document.getElementById('savedDiv').style.display ="none"
      }
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2" id="regDiv">
            <Link to="/AdminDashboard" className="btn-flat waves-effect">
              Back to Dashboard
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              {/* <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p> */}
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <label htmlFor="name" class="label">Name: </label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                  class="regInput"
                  class="nameL"
                />
                <span className="red-text" id="erName">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <label htmlFor="email" class="label">Email: </label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                  class="regInput"
                />
                <span className="red-text" id="errEmail">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <label htmlFor="password" class="label" id="passwordL">Password: </label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                  class="regInput"
                  class="password"
                />
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <label htmlFor="password2" id="confirm" class="label">Confirm Password: </label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                  class="regInput"
                  class="confirm"
                />
                <span className="red-text">{errors.password2}</span>
              </div>
              <div style={{ display: "inline-block" }}>
                <Row>
                  <Col>
                    <p class="label">User Type: </p>
                  </Col>
                  <Col>
                    <Form class="regInput">
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" name="userType" id="userType" onChange={this.onChange} style={{ width: "175px" }} class="regInput">
                          <option>None</option>
                          <option>Client</option>
                          <option>Admin</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  class="su"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          {/* {this.checkError(this.state.errors.email)} */}
          <div id="savedDiv" style={{ display: "none" }}>
            <p id="regName">Name: <span class="regItems">{this.state.name}</span></p>
            <p id="regEmail">Email:  <span class="regItems">{this.state.email}</span></p>
            <p id="regPassword">Password:  <span class="regItems">{this.state.password}</span></p>
            <p id="reguserType">User Type:  <span class="regItems">{this.state.userType}</span></p>
            <Button onClick={this.onOk}>Ok</Button>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
