import React from "react";
import { Navbar, Nav, Button} from 'react-bootstrap';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import "./NavBar.css"

function PrivateNav(props) {
    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser();
    };
    return (
        <div>
  {/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
  <br /> */}
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/dashboard">Convergenx</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/dashboard">Home</Nav.Link>
      <Nav.Link href="/comp">Graph</Nav.Link>
    </Nav>
    <Navbar.Brand href="/AdminDashboard">Admin</Navbar.Brand>
      <Button variant="outline-light" onClick={onLogoutClick}>Log Out</Button>
  </Navbar>
        </div>
    );
}
PrivateNav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(PrivateNav);