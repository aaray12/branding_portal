import React from "react";
import { Navbar, Nav, Button, NavDropdown, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import PropTypes from "prop-types";
import EditStyles from "./editStyles"
import "./bsNav.css"

function BrandSummaryAdminNav(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser();
    };
    // console.log(props)
    function reloadOnClick(e){
        e.preventDefault();
        window.location.reload()
    }
    return (
        <div id ="loaded">
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/dashboard" onClick ={reloadOnClick}>Convergenx</Navbar.Brand>
                <Nav className="mr-auto">
                    <Col className = "DDs">
                        <NavDropdown title="Brand" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#manifesto">Manifesto</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#mission">Mission</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#vision">Vision</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#values">Values</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#colors">Colors</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#typeface">Typeface</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#voice">Voice</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#messaging">Messaging</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#styleguide">Style Guide</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#assets">Assett Library</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col className = "DDs">
                        <NavDropdown title="Audience" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col className = "DDs">
                        <NavDropdown title="Competition" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col className = "DDs">
                        <NavDropdown title="Marketing" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                </Nav>
                <Nav.Link href="/AdminDashboard" id ="adminLink">Admin</Nav.Link>
                <Button variant="outline-light" onClick={() => setModalShow(true)} style ={{marginRight:"1em"}}>Edit</Button>
                <EditStyles
                brandInfo = {props.brandInfo}
                BI = {props.BI}
                userid = {props.auth.user.id}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <Button variant="outline-light" onClick={onLogoutClick}>Log Out</Button>
            </Navbar>
        </div>
    );
}
BrandSummaryAdminNav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(BrandSummaryAdminNav);